//node's path module
const path = require('path');

// modifies default configuration for webpack

module.exports = {
	// modes: development || production
	// we can modified the mode on cli using flags: npm run build -- --mode development
	mode: 'development',
	// path to entry file (first one to be read). default: './src/index.js'
	entry: './src/index.js',
	// bundled files configuration...
	output: {
		// absolute path to where we want to put our files
		path:path.join(__dirname, 'dist'),
		// name of bundle file on output
		filename:  'app.bundle.js'
	} // result .dist/app.bundle.js
};