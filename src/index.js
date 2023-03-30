const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFileSync(fileName, fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	 return fs.readFileSync(fileName, 'utf-8');
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFileSync(fileName, fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	  fs.unlinkSync(fileName);
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
