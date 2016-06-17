module.exports = {
  // path of entry file (which want to used in build operations)
  entry: './main.js',
  // file name of output file
  output: {
    filename: 'bundle.js'
  },
  module: {
    // array contains loaders which will used in build operations
    loaders : [
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
        // regular expression for applying sass loader
        // only on all scss files(which have scss extension)
        test: /\.scss$/,
        // escape(igone) scss files under node_modules folder
        exclude: /node_modules/,
        // next line load three loaders saas, style and css loaders
        // sass-loader  => convert sass syntax to plain css syntax
        // css-loader   => load any css files.
        // style-loader => inject this css files into output file
        loader: 'style!css!sass' //OR loaders: ['style', 'css', 'sass']
      }
    ],
  }
};
