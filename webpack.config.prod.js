const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	mode: 'production',
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: 'static', // creates a report on dist and exits the server
			openAnalyzer: false, // prevents automatic opening on the browser
			reportFilename: 'bundle_sizes.html'
		})
	],
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	}
});