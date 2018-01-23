//let input = process.argv.slice(2);

//console.log(`The minimum of [${input}] is ${Math.min(...inpur}`);



function spreader(input)
{   
	if(input.length===0)
	{
		return null;
	}
    
	for(let i=0;i<input.length;i++)
	{
		if(!isFinite(input[i]) || input[i]===null )
		{
			return null;
		}
	}

	return Math.min(...input);
}

module.exports = spreader;