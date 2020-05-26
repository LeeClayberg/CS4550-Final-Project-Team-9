const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/search',
         {
             target: 'https://comicvine.gamespot.com/api',
             changeOrigin: true}
    ));
}