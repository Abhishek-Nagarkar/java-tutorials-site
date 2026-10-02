# Spring by Building (site repo)

Starlight site for Java and Spring Boot tutorials. Lessons live in a separate content repo.

## Run locally

    npm install
    npm run dev        # http://localhost:4321

Sample lessons in `src/content/docs/` let the site run on its own.

## Go live (one time)

1. Create three GitHub repos: this site repo, a content repo, a code repo.
2. Copy everything inside `content-repo-template/` into the content repo and push.
3. In Cloudflare: Workers & Pages > Create > Pages > Upload assets. Create an empty project (any name) and note the name.
4. Create a Cloudflare API token (permission: Cloudflare Pages: Edit) and copy your Account ID.
5. In the site repo (Settings > Secrets and variables > Actions):
   - Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
   - Variables: `CF_PROJECT_NAME`, `CONTENT_REPO` (e.g. `you/java-tutorials-content`)
   - If the content repo is private, add secret `CONTENT_REPO_TOKEN` (read access to it).
6. In the content repo, add secret `SITE_REPO_TOKEN` (fine-grained token, Contents: read and write on the site repo) and variable `SITE_REPO` (e.g. `you/java-tutorials-site`).
7. Push the site repo to `main`. The workflow builds and deploys. After that, every push to the content repo redeploys the site.

## How it fits together

- `.github/workflows/deploy.yml`: builds the site, swapping in the content repo's files as the docs.
- `public/progress.js`: "Mark as complete" button and sidebar ticks (saved in the browser).
- `astro.config.mjs`: title, sidebar, theme.
