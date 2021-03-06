module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
      test: /\.jsx$/,
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loader: 'style-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader',
    }]
  }
};
