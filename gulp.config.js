module.exports = function() {
	var config = {
		root: "./app",
		allTs: './app/**/*.ts',
		typings: './typings/**/*.d.ts',
		tsOutputPath: './dist/' 	
	};
	
	return config;
}