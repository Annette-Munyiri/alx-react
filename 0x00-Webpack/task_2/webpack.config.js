const path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/dashboard_main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	performance: {
		maxAssetSize: 1000000,
		maxEntrypointSize: 1000000,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
},
