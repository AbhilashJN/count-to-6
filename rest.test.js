let average = require('./rest');

test('The avg of 1,2,3,4,5 should be 3' , () => {
	expect(average(1,2,3,4,5)).toBe(3);
});


test('The avg of 1,2,0,-2,-1 should be 0' , () => {
	expect(average(1,2,0,-2,-1)).toBe(0);
});



test('The avg of empty array should be null', ()=>{
	expect(average()).toBe(null);
});

test('The avg of 0.1,0.2,0.3 should be 0.2', ()=>{
	expect(average(0.1,0.2,0.3)).toBeCloseTo(0.2,5);
});
