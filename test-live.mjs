import { chromium } from 'playwright';

async function testLive() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(String(err)));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('https://cledera.dev/workstation', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  await page.click('text=Back to Home');
  await page.waitForTimeout(3000);

  const heroVisible = await page.locator('#hero-name').isVisible().catch(() => false);
  const bodyText = await page.locator('main').innerText().catch(() => '');
  const url = page.url();

  console.log('URL:', url);
  console.log('Hero visible:', heroVisible);
  console.log('Main text length:', bodyText.length);
  console.log('Errors:', errors);

  await browser.close();
}

await testLive();
