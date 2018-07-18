const path = require('path');

//webpack.config.js
module.exports = (env) => {
	return {
		entry: (env !== 'production' ? [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			] : []).concat(['./client/index.js']),
		output: {
			filename: './bundle.js',
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
							options: {
								modules: true
							}
						}
					]
				}
			]
		}
	}
};