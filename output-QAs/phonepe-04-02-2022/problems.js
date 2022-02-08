//Q-1
const p = new Promise((resolve, reject) => {
	console.log(1);
  setTimeout(() => {
  	resolve();
  })
});

Promise.resolve().then(() => console.log(2));
setTimeout(() => console.log(3));
p.then(() => console.log(4));
setTimeout(() => console.log(5));

//Q-2
function doSomething(){
	return new Promise(function(resolve, reject){
		reject();
		resolve();
	});
}

let promise = doSomething();

promise.then(function(){
	console.log("Success 1");
})
	.then(function(){
  	console.log("Success 2");
  })
  .catch(function(){
  	console.log("Error 1");
  })
  .then(function(){
  	console.log("Success 3");
    return doSomething();
  })
  .finally(function(){
  	console.log("Finally");
  });
