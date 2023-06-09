function reversed(string){
	const str = string.split('').reverse().join('');
	return str;
}

module.exports = { reversed };