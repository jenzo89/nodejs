let fs = require('fs');
module.exports = function(path, filter, callback){
	if(filter){
		filter = "." + filter;
	}
	if(path){
		fs.readdir(path, function(error, files){
			if(error){
				return callback(error);
			}
			let filteredFiles = [];
			files.forEach(function(file){
				if(file.endsWith(filter)){
					filteredFiles.push(file);
				}
			});
			callback(error, filteredFiles);
		});
	}	
}