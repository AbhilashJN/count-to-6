let midpoint = require('./defArgs');

test('Midpoint of 1 and 2 should be 1.5' , ()=>{
	expect(midpoint(1,2)).toBe(1.5); 
});

test('Midpoint of 1 and -1 should be 0' , ()=>{
	expect(midpoint(1,-1)).toBe(0); 
});

test('Midpoint of 1 and 1 should be 1' , ()=>{
	expect(midpoint(1,1)).toBe(1); 
});


test('Midpoint of <no arguments> should be 0.5' , ()=>{ 
	expect(midpoint()).toBe(0.5); 
});

test('Midpoint of 1 and undefined should be 1' , ()=>{ 
	expect(midpoint(1,undefined)).toBe(1); 
});

test('Midpoint of null and null should be 0.5' , ()=>{ 
	expect(midpoint(null,null)).toBe(null); 
});

