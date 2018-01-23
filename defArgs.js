module.exports = function midpoint(lower=0,upper=1) {
	if(lower===null || upper===null)
	{
		return null;
	}
	return (lower+upper)/2;
};