import { chromium } from 'playwright';

async function testBackHome(baseUrl, label) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(String(err)));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto(`${baseUrl}/workstation`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  await page.click('text=Back to Home');
  await page.waitForTimeout(2000);

  const heroVisible = await page.locator('#hero-name').isVisible().catch(() => false);
  const bodyText = await page.locator('main').innerText().catch(() => '');

  console.log(`[${label}] Hero visible:`, heroVisible);
  console.log(`[${label}] Main text length:`, bodyText.length);
  if (errors.length) console.log(`[${label}] Errors:`, errors);

  await browser.close();
  return { ok: errors.length === 0 && heroVisible, errors };
}

await testBackHome('http://localhost:4173', 'prod');
await testBackHome('http://localhost:5174', 'dev');
