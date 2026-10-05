  # AICN Portfolio 

  This is the portfolio page for the AICN of VU Amsterdam.

  It is managed by the VITA team.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Steps to deploy on GH Pages

  (Following [Vite docs](https://vite.dev/guide/static-deploy.html#github-pages))

  1) Make repo public (settings > change visibility)
  2) Set Pages Build & Deployment source to GitHub Actions (settings > pages > build and deployment)
  3) Add `base` to `vite.config.ts` with repo name
  4) Create the `.github/workflows/deploy.yml` workflow for build and deploy
  5) Push to main to build and deploy

  ### Troubleshooting

  * Ensure no versioning is used in the module names as this will cause deployment to fail on GH

  * Ensure name of package in package.json matches organization name

  ### Code Source

  This is a code bundle for IT Project Manager Portfolio (Community). The original project is available at https://www.figma.com/design/57zIzN5bzUevcUznY9vKo9/IT-Project-Manager-Portfolio--Community-.
  