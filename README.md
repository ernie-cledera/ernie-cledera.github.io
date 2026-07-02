Portfolio

## Deployment

Deployments use the GitHub Pages CLI through the script in [scripts/deploy.cjs](scripts/deploy.cjs).

If you do not have write access to the current repository, set a repo you can push to before deploying:

- PowerShell:
  - $env:GH_PAGES_REPO = "owner/repo"
  - $env:GH_PAGES_TOKEN = "ghp_your_token_here"
  - npm run deploy

You can also use a full GitHub URL for the repository:

- $env:GH_PAGES_REPO = "https://github.com/owner/repo.git"
