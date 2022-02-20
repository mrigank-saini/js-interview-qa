/*



*/

//Q-1: 

function outer(){
var a=10;
return function inner(){
	var b=20;
  console.log(a++);
  console.log(b++);
}
}

var result = outer();

result();
result();
result();

outer()();
outer()();
outer()();

//Ans - 10 20 11 20 12 20 10 20 10 20 10 20
