const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const slugTheme = 'uni-theme'
const staticPath = `../${slugTheme}/assets`;


module.exports = {
  target: 'web',
  entry: [`${staticPath}/js/index.js`, `${staticPath}/sass/index.scss`],
  output: {
    path: path.resolve(__dirname, '../assets/dist/',),
    filename: 'js/[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.css', '.scss'],
  },
};
