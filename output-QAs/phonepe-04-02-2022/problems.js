//Q.1.
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

