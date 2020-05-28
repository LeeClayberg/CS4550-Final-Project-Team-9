const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/search',
         {
              target: 'https://comicvine.gamespot.com/api',
              changeOrigin: true}
    ));

    app.use(createProxyMiddleware('/issue',
         {
              target: 'https://comicvine.gamespot.com/api',
              changeOrigin: true}
    ));

    app.use(createProxyMiddleware('/issues',
           {
               target: 'https://comicvine.gamespot.com/api',
               changeOrigin: true}
    ));
}