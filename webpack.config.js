module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'bundle.js',
        path: './'
    },
    module: {
        loaders:[{
            loader: 'babel',
            test: /\.jsx?$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'inline-source-map'
};
/*

module.export = {
  entry: './js/index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.jsx?$/,
      exclude: /node_modules/
    }]
  }
};*/