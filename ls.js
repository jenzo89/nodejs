let fs = require('fs');
let path = process.argv[2];
let filter = process.argv[3];
function getFiles(path, filter){
	if(filter){
		filter = "."+filter;
	}
	if(path){
		fs.readdir(path, function(error, files){
			files.forEach(function(file){
				if(filter){
					if(file.endsWith(filter)){
						console.log(file);
					}	
				}else{
					console.log(file);
				}
				
			})
		});
	}	
}
getFiles(path, filter);