let fs = require('fs');
let fileToRead = process.argv[2];
if(fileToRead != undefined){
	try{
		fs.readFile(fileToRead, "utf8", function(error, text){
			if(error){
				console.log(error);
			}
			console.log(Number(text.toString().split('\n').length) - 1);
		});
	}catch(e){
		console.log(e);
	}
}