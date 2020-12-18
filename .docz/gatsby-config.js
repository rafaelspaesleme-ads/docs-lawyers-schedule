const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Documentação Oficial do Projeto Lawyers Schedule',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/workspace/docs-lawyers-schedule/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Documentação Oficial do Projeto Lawyers Schedule',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/workspace/docs-lawyers-schedule',
          templates:
            '/workspace/docs-lawyers-schedule/node_modules/docz-core/dist/templates',
          docz: '/workspace/docs-lawyers-schedule/.docz',
          cache: '/workspace/docs-lawyers-schedule/.docz/.cache',
          app: '/workspace/docs-lawyers-schedule/.docz/app',
          appPackageJson: '/workspace/docs-lawyers-schedule/package.json',
          appTsConfig: '/workspace/docs-lawyers-schedule/tsconfig.json',
          gatsbyConfig: '/workspace/docs-lawyers-schedule/gatsby-config.js',
          gatsbyBrowser: '/workspace/docs-lawyers-schedule/gatsby-browser.js',
          gatsbyNode: '/workspace/docs-lawyers-schedule/gatsby-node.js',
          gatsbySSR: '/workspace/docs-lawyers-schedule/gatsby-ssr.js',
          importsJs: '/workspace/docs-lawyers-schedule/.docz/app/imports.js',
          rootJs: '/workspace/docs-lawyers-schedule/.docz/app/root.jsx',
          indexJs: '/workspace/docs-lawyers-schedule/.docz/app/index.jsx',
          indexHtml: '/workspace/docs-lawyers-schedule/.docz/app/index.html',
          db: '/workspace/docs-lawyers-schedule/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
