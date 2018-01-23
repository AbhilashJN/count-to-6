let html = require('./tag');
let t= '< > & & \' "';


test('makeSafe("< > & & \' " ") should return &lt; &gt; &amp; &amp; &apos; &quot;', ()=>{
	expect(html.makeSafe(t)).toMatch('&lt; &gt; &amp; &amp; &apos; &quot;');
});

test('makeSafe("abcd") should return abcd', ()=>{
	expect(html.makeSafe('abcd')).toMatch('abcd');
});


test('makeSafe("") should return "";', ()=>{
	expect(html.makeSafe('')).toMatch('');
});

test('html should call the makeSafe function and join the strings', ()=>{
	expect(html.html`<b>${'< > &'} says</b>: "${' \' " '}"`).toMatch('<b>&lt; &gt; &amp; says</b>: " &apos; &quot; "');
});

test('html should call the makeSafe function and return empty string', ()=>{
	expect(html.html``).toMatch('');
});