module.exports = {
  // path of entry file (which want to used in build operations)
  entry: './main.js',
  // file name of output file
  output: {
    filename: 'bundle.js'
  },
  module: {
    // array contains loaders
    // which will used before build operations begin
    preLoaders: [
      {
        // regular expression for applying jshint loader
        // only on all js files(which have js extension)
        test: /\.js$/,
        // escape (igonre) js files under node_modules folder
        exclude: /node_modules/,
        loader: 'jshint'
      }
    ],
    // array contains loaders which will used in build operations
    loaders: [
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
      },
      {
        // regular expression for applying url loader
        // (take the relative url of image and include image into file)
        // only on images files which have jpg or png or gif extension
        test: /\.(jpg|png|gif)$/,
        // include only images files under images folder
        include: /images/,
        loader: 'url'
      }
    ],
  },
  // setting hint for jshint
  // that we use ES6 features By set es version number
  jshint: {
    esversion: 6,
    strict: "global"
  }
};
