# Webpack dev server setup with Hot Module Reloading for Wordpress, uses PostCSS

This repo borrows most of the code from [this repo](https://github.com/tadejstanic/wp-hrm-webpack) so you can refer to that.

1. Copy the contents of the repo into your theme folder

2. run `npm install` to install dependencies

3. Update the contents of `env.config.js` to match your theme

4. run `npm start` to start the dev server, changes to php, js and css files will be automatically reloaded, css and js changes won't require a page refresh

5. When you are ready to publish the theme, run `npm build` to dump the built theme into the `build` folder, upload that version to your wordpress install
