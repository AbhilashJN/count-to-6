module.exports = function makeImportant(text,num=text.length){
	if(num<0)
	{
		return null
	}

	return (`${text}${('!').repeat(num)}`);
};


