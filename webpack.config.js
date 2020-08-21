const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ];
  };

  const getPlugins = () => {
    const plugins = [ 
      new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: './src/assets/img/icon-48x48.png',
      }),
  //  new CopyPlugin([
  //    { from: './src/assets', to: 'assets' },
  //  ]),
    ];

    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
          filename: 'main-[hash:8].css'
        })
      );
    }

    return plugins;
  };

  return { 
    entry: './src/index.js',
    mode: isProd ? 'development' : isDev && 'development',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: getStyleLoaders(),
        },
        {
          test: /\.s[ac]ss$/i,
          use: [ ...getStyleLoaders(), 'sass-loader'],
        },
        {
          test: /\.html$/i,
          use: ['html-loader']
        },
        {
          test: /\.(png|jpg|svg|gif)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img'
            },
          }
        },
        {
          test: /\.(woff(2)?|ttf|otf|eot)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts'
            },
          }
        },
      ],
    },
    plugins: getPlugins(),
    devtool: 'source-map',
    devServer: {
      open: true,
      contentBase: path.join(__dirname, 'build'),
      publicPath: 'http://localhost:8080/',
      compress: true,
      watchContentBase: true
    }
  }  
};
