let spreader = require('./spread');


test('The minimum of [1,2,3] should be 1' , ()=>{
	expect(spreader([1,2,3])).toBe(1);
});


test('The minimum of [] should be 1' , ()=>{
	expect(spreader([])).toBe(null);
});


test('The minimum of [1,1,1] should be 1' , ()=>{
	expect(spreader([1,1,1,])).toBe(1);
});


test('The minimum of ["a",1,1] should be null' , ()=>{
	expect(spreader(['a',1,1,1])).toBe(null);
});

test('The minimum of [undefined,1,1] should be null' , ()=>{
	expect(spreader([undefined,1,1])).toBe(null);
});

test('The minimum of [null,1,1] should be null' , ()=>{
	expect(spreader([null,1,1])).toBe(null);
});

