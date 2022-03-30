import webpack, { Configuration as WebpackConfig } from 'webpack';
import path from 'path';
import dotenv from 'dotenv';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration as DevServerConfig } from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

dotenv.config();

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_PREFIX: string = process.env.REACT_APP_API_PREFIX || '/';
const PORT = process.env.REACT_APP_PORT;

const DEV_ENV = 'development';
const PROD_ENV = 'production';
const isDevMode = process.env.NODE_ENV !== PROD_ENV;

const SOURCE_DIR = 'src';
const PUBLIC_DIR = 'public';
const OUTPUT_DIR = 'dist';

interface Configuration extends WebpackConfig {
  devServer?: DevServerConfig;
}
const ENV: { [x: string]: string } = {
  NODE_ENV: isDevMode ? DEV_ENV : PROD_ENV,
};

for (const key in process.env) {
  if (key && key.startsWith('REACT_APP_')) {
    ENV[key] = process.env[key] || '';
  }
}

const config: Configuration = {
  name: 'via-frontend',
  mode: isDevMode ? DEV_ENV : PROD_ENV,
  devtool: isDevMode ? 'inline-source-map' : 'hidden-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, SOURCE_DIR),
    },
  },
  entry: `./${SOURCE_DIR}/index`,
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['IE 10'] },
                debug: isDevMode,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          env: {
            development: {
              plugins: [
                ['@emotion/babel-plugin', { sourceMap: true }],
                require.resolve('react-refresh/babel'),
              ],
            },
            production: {
              plugins: ['@emotion/babel-plugin'],
            },
          },
        },
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new webpack.EnvironmentPlugin(ENV),
    new HtmlWebpackPlugin({
      template: `./${PUBLIC_DIR}/index.html`,
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, OUTPUT_DIR),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    port: PORT,
    static: { directory: path.resolve(__dirname, PUBLIC_DIR) },
    open: true,
    proxy: {
      [API_PREFIX]: {
        target: API_BASE_URL,
        changeOrigin: true,
        ws: true,
      },
    },
  },
};

if (isDevMode) {
  if (config.plugins) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(
      new ReactRefreshWebpackPlugin({
        overlay: {
          useURLPolyfill: true,
        },
      }),
    );
    config.plugins.push(
      new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }),
    );
  }
} else {
  if (config.plugins) {
    config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
    config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
  }
}

export default config;
