module.exports = function() {
	var config = {
		allTs: './app/**/*.ts',
		typings: './typings/**/*.d.ts',
		tsOutputPath: './dist/' 	
	};
	
	return config;
}