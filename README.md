# Svelte app

## Installation
```bash
npx degit chromaui/intro-storybook-svelte-template lazy-pomodoro
cd lazy-pomodoro
yarn
yarn dev # make sure it works
yarn storybook # make sure it works
yarn test  # make sure it works
git init
git add .
git commit -m "First commit"
yarn add --dev tailwindcss postcss@latest autoprefixer@latest @rollup/plugin-alias
yarn add
    "@fortawesome/fontawesome-free": "5.14.0",
    "@popperjs/core": "2.5.1",
    "@rollup/plugin-alias": "3.1.1",
    "@tailwindcss/custom-forms": "0.2.1",
    "chart.js": "2.9.3",
    "sirv-cli": "1.0.6",
    "svelte-routing": "1.4.2",
    "tailwindcss": "1.8.10"
yarn tailwindcss init
```

## Road map
- Setup Svelte & Storybook & UI library
- Deploy to [Github page](https://community.thenetninja.co.uk/t/deploying-my-svelte-app-to-github-pages/762?ref=creativetim) or Heroku 
- Crate app which uses only local storage
- Create backend using go
- Change app to use database like MySQL or PostgreSQL
