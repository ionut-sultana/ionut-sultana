module.exports =  {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: "./app/temp/scripts",
		filename : 'App.js'
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