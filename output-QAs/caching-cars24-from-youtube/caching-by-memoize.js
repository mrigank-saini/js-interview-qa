/*

Caching in JS - Memoize
https://www.youtube.com/watch?v=vxggZffOqek

This program helps us to implement caching strategy for expensive function calls

*/
function memoize(fn,context) {
var res={};
	return function(...args){
		const argsCache = JSON.stringify(args);
		if(!res[argsCache]){
    	res[argsCache] = fn.call(context || this,...args);
    }
    return res[argsCache];
  }
}

const clumsy = (num1, num2) => {
	for(let i=0;i<10000001;i++){}
  
  return num1*num2;
} 

console.time("First Call");
console.log(memoize(clumsy)(33,44)); 
console.timeEnd("First Call");

console.time("First Call");
console.log(memoize(clumsy)(33,44)); 
console.timeEnd("First Call");
