let fs = require('fs');
let fileToRead = process.argv[2];
if(fileToRead != undefined){
	try{
		let text = fs.readFileSync(fileToRead);
		console.log(Number(text.toString().split('\n').length) - 1);
	}catch(e){
		console.log(e);
	}
}