const { resolve } = require('path');
const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: 'src/assets/**/*.scss',
  }
};

function isVueRule(rule) {
  return rule.test.toString() === '/\\.vue$/';
}

function isSassRule(rule) {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1;
}

module.exports = {
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    title: 'JeffMinsungKim',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'jeffminsungkim, minsungkim, vuejs, nuxtjs, nuxt, javascript, SPA, Static, website, webpage, blog'},
      { hid: 'description', name: 'description', content: "JeffMinsungKim's Awesome Personal Website" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Italiana|Raleway' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.options.loaders.sass.push(sassResourcesLoader);
          rule.options.loaders.scss.push(sassResourcesLoader);
        }
        if (isSassRule(rule)) rule.use.push(sassResourcesLoader);
      });
    }
  }
};
