let makeImportant = require('./defArgs2');

test('makeImportant("Hello") should print Hello!!!!!' , ()=>{  
	expect(makeImportant('Hello')).toMatch('Hello!!!!!');
});


test('makeImportant("Hello",2) should print Hello!!' , ()=>{  
	expect(makeImportant('Hello',2)).toMatch('Hello!!');
});


test('makeImportant("") should print \'\'' , ()=>{  
	expect(makeImportant('')).toMatch('');
});

test('makeImportant("",3) should print \'!!!\'' , ()=>{  
	expect(makeImportant('')).toMatch('');
});

test('makeImportant("a",0) should print \'a\'' , ()=>{  
	expect(makeImportant('a',0)).toMatch('a');
});

test('makeImportant("a",-3) should return null' , ()=>{  
	expect(makeImportant('a',-3)).toBe(null);
});