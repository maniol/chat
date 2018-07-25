const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const environment = process.env.NODE_ENV || 'production';
const plugins = [new HtmlWebpackPlugin({
	template: 'client/index.html',
	filename: 'index.html',
	inject: 'body'
})];

if (environment === 'production') {
	plugins.push(
		new OptimizeJsPlugin({
			sourceMap: false
		})
	)
}

//webpack.config.js
module.exports = {
	devtool: 'source-map',
	entry: (environment !== 'production' ? [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		] : []).concat(['./client/index.js']),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				loader: "babel-loader"
			},
			{
				test:/\.css$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: { modules: true }
					}
				]
			}
		]
	},
	plugins //in ES6 same as plugins: plugins
};