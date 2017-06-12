/**
 * Created by Lxg on 2017/5/14.
 */

function webpackDevMiddleware(app) {
  let webpack = require('webpack');
  let WebpackDevMiddleware = require('webpack-dev-middleware');
  let config = require('../../build/dev.js');
  let compiler = webpack(config);
  app.use(WebpackDevMiddleware(compiler, {
    stats: { colors: true }
  }));
}

module.exports = webpackDevMiddleware;
