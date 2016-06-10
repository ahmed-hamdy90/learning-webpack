module.exports = {
  // path of entry file (which want to used in build operations)
  entry: './main.js',
  // file name of output file
  output: {
    filename: 'bundle.js'
  },
  module: {
    // array contains loaders which will used in build operations
    loader : [
      {
        // regular expression for applying babel loader
        // only on all js files(which have js extension)
        test: /\.js$/,
        // escape (igonre) js files under node_modules folder
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ],
  }
};
