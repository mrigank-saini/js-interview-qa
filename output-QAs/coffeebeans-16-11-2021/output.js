//Try on - https://jsfiddle.net/

//Q.1
var i=2;
const array = [];
for(let i=0;i<i;i++);{
	array.push(i+1);
}
console.log(array);

//Q.2
var a=5;
function length() {
	console.log(this.a);
}

var obj = {
	a:10,
  method: function(a){
  	length();
    arguments[0]();
  }
};
obj.method(length,2);
