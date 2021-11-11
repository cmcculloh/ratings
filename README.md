# Ratings


# Tech Stack
- Github
- Yarn
- React
- Typescript
- Babel
- Webpack
- PostgreSQL
- Massive JS

# How I created this:

## References:
https://medium.com/swlh/back-to-basics-how-to-set-up-a-react-app-from-scratch-2020-134908e17490
https://classic.yarnpkg.com/en/docs/cli/install/
https://github.com/webpack/webpack-dev-server/blob/master/migration-v4.md
https://blog.logrocket.com/using-typescript-with-react-tutorial-examples/

```
mkdir ratings
cd ratings
yarn init -y
yarn add typescript ts-loader
yarn add --dev webpack webpack-cli webpack-dev-server
yarn add react react-dom @types/react @types/react-dom
yarn add @salesforce/design-system-react
mkdir public
mkdir src
touch src/app.js
touch webpack.config.js
touch tsconfig.json
touch public/index.html
```

webpack.config.js controls how the code is bundled up.
-> Note that in the tutorial they utilize `devServer.contentBase`, whereas the newest version of webpack (as of this writing) was v4, which required `devServer.static.directory` instead.


