# Svelte template app

## Tech stack
- Svelte
- Storybook
- TailwindCSS
- Deploy to Github page using Github Action
  
> If you want to use Github page and your github account is free, your repository should be public repo.

## Installation
```bash
npx degit masumomo/svelte-storybook-github-template <Project Name>
cd <Project Name>
yarn
yarn dev # make sure it works
yarn storybook # make sure it works
yarn test  # make sure it works
git init
git add .
git commit -m "Initial commit"
git remote add origin <Your repo> # It depends on your project
git push origin head # Github action would run automatically and it would be deployed!
```

## TODO for myself...

[Sample atomic design](https://atomicdesign.bradfrost.com/chapter-2/#atomic-design-is-for-user-interfaces)

[Nice tailwind design components](https://tailwindui.com/components?utm_source=tailwindcss&utm_medium=navigation)

- [x]Done🎉 Setup Svelte & Storybook & UI library
- [x]Done🎉 Deploy to [Github page](https://community.thenetninja.co.uk/t/deploying-my-svelte-app-to-github-pages/762?ref=creativetim) or Heroku 
- [x]Done🎉 Create round buttons
- [x]Done🎉 Create buttons
- []Done🎉 Create header
- []Done🎉 Create footer
- []Done🎉 Create card
- []Done🎉 Create article(half size)
- []Done🎉 Create article(full size)
- []Done🎉 Create sample pages(2 or more) 
  - Sample Blog 
  - Sample LP
- []Done🎉 Crate app which uses only local storage or static
