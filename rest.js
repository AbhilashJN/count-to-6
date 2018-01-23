function average(...args) {
	if (args.length===0)
	{
		return null;
	}
	let result = args.reduce((acc,curr)=>acc+curr) / args.length;
	return result;
}
module.exports = average;
//console.log(average(1,2,3,4));