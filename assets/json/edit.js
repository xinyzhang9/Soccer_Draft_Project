var Data =require('./gk_gold_rare.json');
var fs = require('fs');
var outputFilename = 'my.json';

counter = 0;
for(x in Data){
	Data[x].id = counter;
	Data[x].rating=Data[x].rating[0];
	Data[x].alias=Data[x].alias[0];
	Data[x].position=Data[x].position[0];
	Data[x].dive=Data[x].dive[0];
	Data[x].hand=Data[x].hand[0];
	Data[x].kick=Data[x].kick[0];
	Data[x].reflex=Data[x].reflex[0];
	Data[x].speed=Data[x].speed[0];
	Data[x].pos=Data[x].pos[0];
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