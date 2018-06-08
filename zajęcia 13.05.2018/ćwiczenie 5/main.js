function lokalna(){
	var x=1;
	x=x+1;
	console.log('lokalna wynosi '+x);
}
var y=1;
function globalna(){
	y=y+1;
	console.log('globalna wynosi '+y);
}
function Stefan(){
	//console.log('lokalna'+x);
	console.log('globalna '+y);
}