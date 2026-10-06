  # AICN Portfolio 

  This is the portfolio page for the AICN of VU Amsterdam.

  It is managed by the VITA team.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Steps to deploy on GH Pages

  (Following [Vite docs](https://vite.dev/guide/static-deploy.html#github-pages))

  1) Make repo public (settings > change visibility)
  2) Set Build & Deployment source to GitHub Actions (settings > pages > build and deployment > source)
  3) Add `base` to `vite.config.ts` with repo name
  4) Create the `.github/workflows/deploy.yml` workflow for build and deploy
  5) Push to main to build and deploy

  ### Troubleshooting

  * Do not use dependency names with versioning (ie: `@emotion/react@11.14.0` vs `@emotion/react`) as this may cause the deployment to fail on GH due to pnpm versioning.

  * Ensure name of package in package.json matches organization name.

  ### Code Source

  This is based on a code bundle for IT Project Manager Portfolio (Community). The original project is available at https://www.figma.com/design/57zIzN5bzUevcUznY9vKo9/IT-Project-Manager-Portfolio--Community-.
  