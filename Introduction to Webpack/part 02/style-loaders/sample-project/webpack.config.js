module.exports = {
  // path of entry file (which want to used in build operations)
  entry: './main.js',
  // file name of output file
  output: {
    filename: 'bundle.js'
  },
  module: {
    // array contains loaders which will used in build operations
    loaders: [
      {
        // regular expression for applying babel loader
        // only on all js files(which have js extension)
        test: /\.js$/,
        // escape (ignore) js files under node_modules folder
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015']
        }
      },
      {
        // reqular expression for applying css loader
        // only on all css files(which have css extension)
        test: /\.css$/,
        // escape (ignore) css files under node_modules folder
        exclude: /node_modules/,
        // next line load two loaders style and css loaders
        // css-loader   => load any css files.
        // style-loader => inject this css files into output file
        // (notice: load any number of loaders
        // by writing loader names separated by !
        // But loaders working from right to left
        // [i.e css loader work first then style loader])
        loader: "style!css"
      }
    ],
  }
};
