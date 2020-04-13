const path = require('path')
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        ['react-app', { flow: false, typescript: true }],
        '@babel/env',
        '@babel/typescript',
      ],
      plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-optional-chaining',
        '@babel/proposal-nullish-coalescing-operator',
        '@babel/proposal-object-rest-spread',
      ],
    },
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = Object.assign(config.resolve.alias, { '@': path.resolve(__dirname, '..') })
  return config
}
