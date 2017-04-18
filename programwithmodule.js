let testModule = require("./modules/testmodule.js");
testModule(process.argv[2], process.argv[3], function(error, files){
	files.forEach(function(file){
		console.log(file);
	})
});