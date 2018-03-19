const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const lessFunctions = require('less-plugin-functions')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const root = path.resolve(__dirname, '..')

const lessOptions = {
  plugins: [
    new lessFunctions()
  ]
}

const postCssOptions = {
  ident: 'postcss-ident',
  plugins: () => [
    autoprefixer({browsers: 'last 5 version'})
  ]
}

const rules = {
  jsx: {
    test: /\.jsx?$/,
    include: path.resolve(root, 'site-src'),
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react']
      }
    }
  },
  css: {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {loader: 'css-loader', options: {importLoaders: 1}},
        {loader: 'postcss-loader', options: postCssOptions}
      ]
    })
  },
  less: {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {loader: 'css-loader', options: {importLoaders: 1}},
        {loader: 'postcss-loader', options: postCssOptions},
        {loader: 'less-loader', options: lessOptions}
      ]
    })
  },
  url: {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: {loader: 'url-loader'}
  }
}

const base = {
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'fantasy-ui': path.resolve(root, 'dist')
    },
    extensions: ['.js', '.jsx', '.less']
  }
}

const development = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(root, 'site-src/index.js')
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(root, 'site'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8080,
    publicPath: '/',
    contentBase: path.resolve(root, 'dist')
  },
  module: {
    rules: [rules.jsx, rules.css, rules.less, rules.url]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('index.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'site-src/index.html')
    })
  ]
}

const production = {
  entry: path.resolve(root, 'site-src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(root, 'site'),
    publicPath: '/fantasy-ui'
  },
  module: {
    rules: [rules.jsx, rules.css, rules.less, rules.url]
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'site-src/index.html')
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ie8: false,
        mangle: true,
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ]
}

module.exports = (env = 'development') => {
  console.log('\n===========================\n')
  console.log(`     env: ${env}`)
  console.log('\n---------------------------\n')
  
  return env === 'production'
    ? merge(base, production)
    : merge(base, development)
}
