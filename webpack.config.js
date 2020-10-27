const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    // match the output 'publicPath'
    publicPath: '/build/',
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000/',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            // loader compiles typescript
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules'],
  },
};
