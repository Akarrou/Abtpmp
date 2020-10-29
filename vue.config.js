const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
    {
        path: '/',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: '0.8',
        changefreq: 'hourly'
    },
];
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css', 'svg']
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
  configureWebpack: {
    plugins: [
      new SitemapPlugin('https://abtpmp.fr', paths, {
        filename: 'sitemap.xml',
        lastmod: true,
        changefreq: 'weekly',
        priority: '0.8'
      }),
      new RobotstxtPlugin({
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: ["/search"],
            crawlDelay: 2,
          },
          {
            userAgent: "OtherBot",
            allow: ["/allow-for-all-bots", "/allow-only-for-other-bot"],
            disallow: ["/admin", "/login"],
            crawlDelay: 2,
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
            cleanParam: "ref /articles/",
          },
        ],
        sitemap: "https://abtpmp.fr/sitemap.xml",
        host: "https://abtpmp.fr",
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
}

















