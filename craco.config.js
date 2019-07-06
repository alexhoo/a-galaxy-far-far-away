const { getLoader, loaderByName, throwUnexpectedConfigError } = require('@craco/craco')
const path = require('path')

module.exports = {
  plugins: [
    { plugin: require('craco-less') },
    {
      plugin: {
        overrideWebpackConfig: ({ context, webpackConfig }) => {
          const { isFound, match: fileLoaderMatch } = getLoader(
            webpackConfig,
            loaderByName('file-loader'),
          )

          if (!isFound) {
            throwUnexpectedConfigError({
              message: `Can't find file-loader in the ${context.env} webpack config!`,
            })
          }

          fileLoaderMatch.loader.exclude.push(/theme.config$/)
          fileLoaderMatch.loader.exclude.push(/\.variables$/)
          fileLoaderMatch.loader.exclude.push(/\.overrides$/)

          return webpackConfig
        },
      },
    },
  ],
  webpack: {
    alias: {
      '../../theme.config$': require('path').join(__dirname, '/src/semantic-ui/theme.config'),
      Components:            path.resolve(__dirname,'src/components'),
      Containers:            path.resolve(__dirname,'src/containers'),
      Definitions:           path.resolve(__dirname, 'src/definitions'),
      Hooks:                 path.resolve(__dirname, 'src/hooks'),
      Reducers:              path.resolve(__dirname, 'src/store/reducers'),
      Sagas:                 path.resolve(__dirname, 'src/store/sagas'),
      Services:              path.resolve(__dirname, 'src/services'),
      Utils:                 path.resolve(__dirname, 'src/services/utils'),
    },
  },
}