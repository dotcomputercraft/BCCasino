require('./lib/bigsix.js');
var bitcoin = require('bitcoin'); 
var client = new bitcoin.Client('localhost', 8332, 'bitcoin', 'Qwerty123456'); 
var bs = new BigSixWheel();
var results = new Object();
for(var x=0;x<50000;x++){
	var spin = bs.Spin()[0];
	if(results[bs.getWheel()[spin]] ===undefined)
		results[bs.getWheel()[spin]]=0;
	results[bs.getWheel()[spin]]++;
	console.log("Spin "+x+": "+spin);	
}
console.log("BETS: "+bs.getBets().length);
for(var word in results)
	console.log("BET: "+word +" Count: "+results[word]);

