global.watch = true

const { PATHS, PROXY_TARGET, BROWSER, THEME_NAME } = require('../env.config')
const utils = require('./utils')
const path = require('path')
const fsp = require('fs-promise')
const browserSync = require('browser-sync').create()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const htmlInjector = require('bs-html-injector')
const webpackConfig = require('../webpack.config')

const bundler = webpack(webpackConfig)

const bsOptions = {
  files: [{
    // js changes are managed by webpack
    match: [`${PATHS.base()}/**/*.php`],
    // manually sync everything else
    fn: synchronize
  } ],

  proxy: {
    // proxy local WP install
    target: PROXY_TARGET,

    middleware: [
      // converts browsersync into a webpack-dev-server
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: true,
        stats: {
          colors: true
        }
      }),

      // hot update js && css
      webpackHotMiddleware(bundler)
    ]
  },

  browser: BROWSER,

  // Open app in browser?
  open: false
}

browserSync.use(htmlInjector, { restrictions: ['#app'] })

function synchronize (event, file) {
  // activate html injector
  if (file.endsWith('php')) { htmlInjector() }
}

(async () => {
  await fsp.emptyDir(PATHS.compiled())
  await utils.addMainCss()
  browserSync.init(bsOptions)
})()
