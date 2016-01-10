module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/ReactGravatar.min.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {presets: ['es2015', 'react']}}
    ]
  }
}