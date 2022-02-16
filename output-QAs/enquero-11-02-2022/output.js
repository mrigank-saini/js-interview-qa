/*
Q1 - 
//This is giving error as iife only takes a function to be executed as an argument
let a = 10;
(for (var i=0; i<=5; i++) 
	{	
  	let a =20;	
    console.log(a);
    setTimeout(function clog() 
    {console.log(i)});
    })()
console.log(a);
Q-2
//let a = 10;
for (var i=0; i<=5; i++) {
//let a =20;
//console.log(a);
setTimeout(
	function clog() 
		{
    	console.log(i)
    }
    );
 }

Q3 - 
let a = 10;
(for (var i=0; i<=5; i++) 
	{
  	console.log(a);
    setTimeout(function clog() {console.log(i)});
  })()
Q4 - 
(for (var i=0; i<=5; i++) {
	let a =20;
  setTimeout(function clog() {console.log(i)});
})()console.log(a);


Let a = [1,2,2,3,4,5,5];

Let i=0;j=1;

Q-5
How to remove duplicates from an array 
Ans - Using Set()
*/
