const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	context: path.join(__dirname, "public"),
	entry: "./js/index.js",
	module: {
		rules: [
			// babel
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']
					}
				}]
			},
			// CSS
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					}
				]
			}
		]
	},
	output: {
		path: __dirname + "/public/",
		filename: "index.min.js",
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: debug ? [] : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		watchContentBase: true,
	}
};
