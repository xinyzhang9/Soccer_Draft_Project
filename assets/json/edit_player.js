var Data =require('./player.json');
var fs = require('fs');
var outputFilename = 'players.json';

counter = 0;
for(x in Data){
	Data[x].id = counter;
	Data[x].rating=Data[x].rating[0];
	Data[x].alias=Data[x].alias[0];
	Data[x].position=Data[x].position[0];

	counter++;
}
console.log(Data);
fs.writeFile(outputFilename,JSON.stringify(Data, null, 4),function(err){
	if(err){
	console.log(err);
	}else{
	console.log('success')
	}
});