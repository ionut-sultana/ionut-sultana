module.exports =  {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: "./app/temp/scripts",
		filename : '[name].js'
	},
	module :{
		loaders:
			[
				{
					loader: 'babel',
					query : {
  						"presets": [require.resolve("babel-preset-es2015")]
					},
					test : /\.js$/,
					exclude: /node_modules/
				}
			]
	}
} 