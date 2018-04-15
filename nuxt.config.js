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
      { hid: 'description', name: 'description', content: "JeffMinsungKim's Awesome Personal Website" },
      { name: 'author', content: 'jeffminsungkim' },
      { name: 'keywords', content: 'jeffminsungkim' },
      { property: 'og:title', content: 'JeffMinsungKim' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://github.com/jeffminsungkim/jeffminsungkim.github.io/blob/master/images/jeffminsungkim.png' },
      { property: 'og:url', content: 'https://jeffminsungkim.com' },
      { property: 'og:description', content: "JeffMinsungKim's Awesome Personal Website" },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'JeffMinsungKim' },
      { name: 'twitter:description', content: "JeffMinsungKim's Awesome Personal Website" },
      { name: 'twitter:image', content: 'https://github.com/jeffminsungkim/jeffminsungkim.github.io/blob/master/images/jeffminsungkim.png' },
      { name: 'twitter:creator', content: '@jeffminsungkim' },
      { name: 'twitter:site', content: '@jeffminsungkim' },
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
