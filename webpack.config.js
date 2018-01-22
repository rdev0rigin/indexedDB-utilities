var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var webpackMerge = require('webpack-merge');

var nodeModules = fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	});

// .forEach(function(mod) {
// 	nodeModules[mod] = 'commonjs ' + mod;
// });

var backendConfig = {
	entry: [
		'./src/index'
	],
	target: 'node',
	output: {
		path: path.join(__dirname, 'bundle'),
		filename: 'bundle.js'
	},
	node: {
		__dirname: true,
		__filename: true
	},
	externals: [
		function(context, request, callback) {
			var pathStart = request.split('/')[0];
			if (nodeModules.indexOf(pathStart) >= 0) {
				return callback(null, "commonjs " + request);
			}
			callback();
		}
	],

	// recordsPath: path.join(__dirname, 'bundle/_records'),
	plugins: [
		// new WebpackShellPlugin({
		// 	onBuildEnd: ['node ./bundle/backend.js']
		// })
	],
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: [
					'awesome-typescript-loader'
				]
			}
		]
	}

};

var defaultConfig = {
	devtool: "source-map",
	output: {
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[id].chunk.js'
	},
	resolve: {
		extensions: [ ".ts", ".js" ],
		modules: [ path.resolve(__dirname, "node_modules") ]  // jshint ignore:line
	},
	node: {
		global: true,
		crypto: 'empty',
		__dirname: true,
		__filename: true,
		process: true,
		Buffer: false,
		clearImmediate: false,
		setImmediate: false
	}

};

module.exports = webpackMerge(defaultConfig, backendConfig);
