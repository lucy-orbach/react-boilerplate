//node's path module
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// modifies default configuration for webpack

module.exports = {
	// modes: development || production
	// we can modified the mode on cli using flags: npm run build -- --mode development
	// mode: 'development',
	// path to entry file (first one to be read). default: './src/index.js'
	entry: './src/index.js',
	// bundled files configuration...
	output: {
		// absolute path to where we want to put our files
		path:path.join(__dirname, 'dist'),
		// name of bundle file on output
		filename:  'app.bundle.js'
	}, // results in -> .dist/app.bundle.js
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' })
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
		}
	}
};

/*
get latest browsers:
npx browserslist "last 2 versions, not dead, not < 2%"

*/