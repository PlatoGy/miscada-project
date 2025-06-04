const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ENTRY_VTK = false;
const ENTRY_CS3D = false;
const ENTRY_CORNERSTONE_TOOLS = false;
const ENTRY_CORNERSTONE_MATH = false;
const ENTRY_CORNERSTONE_STATE = false;
const ENTRY_CORNERSTONE = false;
const ENTRY_CORNERSTONE_WEB_IMAGE_LOADER = false;
const ENTRY_DICOM_PARSER = false;
const ENTRY_HAMMERJS = false;
const ENTRY_CORNERSTONE_WADO_IMAGE_LOADER = false;

const baseConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: '@ohif/mode-unsam',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      ENTRY_VTK,
      ENTRY_CS3D,
      ENTRY_CORNERSTONE_TOOLS,
      ENTRY_CORNERSTONE_MATH,
      ENTRY_CORNERSTONE_STATE,
      ENTRY_CORNERSTONE,
      ENTRY_CORNERSTONE_WEB_IMAGE_LOADER,
      ENTRY_DICOM_PARSER,
      ENTRY_HAMMERJS,
      ENTRY_CORNERSTONE_WADO_IMAGE_LOADER,
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = baseConfig; 