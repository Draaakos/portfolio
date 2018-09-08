const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const WebpackBuildNotifier = require('webpack-build-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const createAppPath = appName =>
  path.resolve(__dirname, 'static', 'js', 'apps', `${appName}.js`);

const hashCreator = function() {
  this.plugin('done', function(stats) {
    const jsonStats = stats.toJson();
    const hash = jsonStats.hash;
    fs.writeFileSync(__dirname + '/stats.json', JSON.stringify({ hash }));
  });
};

module.exports = function(env) {
  const production = !!env.production;

  const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: !production
  });

  return {
    devtool: production ? 'hidden-source-map' : 'inline-source-map',
    entry: {
      home: createAppPath('home'),
      vendor: [
        'react',
        'react-dom'
      ]
    },
    output: {
      path: path.join(__dirname, 'dist', 'js'),
      filename: production ? '[name][hash].js' : '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  includePaths: []
                }
              },
              'postcss-loader'
            ],
            fallback: 'style-loader'
          })
        }
      ]
    },
    resolve : {
      extensions: ['.js', '.json', '.jsx'],
      modules: ['node_modules']
    },
    plugins: [
      new WebpackBuildNotifier(),
      new UglifyJsPlugin({ sourceMap: true }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: production ? '[name][hash].js' : '[name].js',
        minChunks: Infinity
      }),
      extractSass,
      production ? hashCreator : null
    ].filter(isPlugin => isPlugin)
  };
}
