# Leo Melendez Gameplay Portfolio

A React and Vite portfolio with a Spektr gameplay trailer, three project write-ups, and a downloadable résumé. The production build uses relative paths so it works both at a GitHub Pages domain root and under a repository path.

## Preview locally

Use Node.js 24 or a compatible version from the `engines` field.

```bash
npm ci
npm run dev
```

For a local production check, run `npm run build` and then `npm run preview`.

## Deploy to GitHub Pages

1. Create a repository for the portfolio and copy the contents of this folder to its root, including `.github/workflows/deploy.yml`.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** under **Build and deployment → Source**.
3. Commit and push to `main`. If you pushed before enabling Pages, run **Deploy portfolio to GitHub Pages** from the **Actions** tab. The job displays the published URL once it finishes.

## Edit the portfolio

- Change the project descriptions, captions, and profile links in `src/content.js`. The experience section is in `src/main.jsx`.
- Update the look in `src/style.css`.
- Replace `public/Leo_Melendez_Gameplay_Resume.pdf` with a fresh PDF when you edit the Word résumé. Update the résumé’s portfolio hyperlink to your new GitHub Pages address if you want it to point to this site.
- Replace the images or local video in `public/media`. The Spektr imagery and alpha trailer come from its [Steam store page](https://store.steampowered.com/app/5443450/Spektr/). The Octoslayer and Clerical Error images are from the gameplay videos linked in the projects.
