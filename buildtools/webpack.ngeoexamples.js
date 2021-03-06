const path = require('path');
const ls = require('ls');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [];
const entry = {};

for (const filename of ls('examples/*.html')) {
  const name = filename.name;
  entry[name] = [
    './examples/common_dependencies.js', // Should be first
    'ngeo/mainmodule.js', // To have a big commons part
    `./examples/${name}.js`
  ];
  plugins.push(
    new HtmlWebpackPlugin({
      template: `examples/${name}.html`,
      chunksSortMode: 'manual',
      filename: name + '.html',
      chunks: ['commons', name],
    })
  );
}

// move data folder
plugins.push(new CopyWebpackPlugin(
  [
    {
      from: 'examples/data/*',
      to: 'data',
      flatten: true
    },
    {
      from: 'examples/partials/*',
      to: 'partials',
      flatten: true
    }
  ]
));

module.exports = {
  output: {
    path: path.resolve(__dirname, '../.build/examples-hosted/'),
  },
  entry: entry,
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'commons',
    }
  },
  plugins: plugins,
};
