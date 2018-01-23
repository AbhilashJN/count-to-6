//console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);


//console.log(html`<b>${"< > &"} says</b>: "${" ' \" "}"`);


function html(txts, ...args) {
	let result = txts[0];
	for (let i = 0; i < args.length; ++i) 
	{
		result += makeSafe(args[i]) + txts[i+1];
	}
	return result;
}

function makeSafe(text) {

	return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

module.exports = {html: html, makeSafe: makeSafe};
