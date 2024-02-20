const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './script.js', // Example entry point, adjust based on your project
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Example output path, adjust as needed
  },
  module: {
    rules: [
      // Rule for processing JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv(), // Use dotenv-webpack as a plugin
    // Add other plugins as needed
  ],
  // Other Webpack configurations...
};

