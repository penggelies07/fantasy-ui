const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const lessFunctions = require('less-plugin-functions')
const autoprefixer = require('autoprefixer')

const root = path.resolve(__dirname, '..')

const lessOptions = {
  plugins: [
    new lessFunctions()
  ]
}

const postCssOptions = {
  iden
}
