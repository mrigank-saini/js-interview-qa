/**
Intersection of Array of Objects
You have an array of objects, array can have (n) no. of objects
Each object can have (m) of key value pairs
You have to find common key value pair across all the objects in the array.
Example:
[{a:100,b:20},{a:10,b:20}] => {b:20}

[{a:100,b:20,d:30},{a:10,b:20,d:30}] => {b:20,d:30}
*/
let m = new Map();
let result ={};

const setValue = (obj)=>{
	for(let i in obj){
  	if(m.has(i)){
    if(m.get(i)["flag"]){
  	      let existing = m.get(i)[i];
  	      //console.log(existing);
  	      if(existing == obj[i] ){
  	        result[i] = obj[i];
  	      }
  	      else{
  	        m.set(i,{
  	          ...m.get(i),
  	          flag:false
  	        });
  	        console.log(m.get(i));
  	      }
  	    }
        }
    else{ 	
      m.set(i, {[i]: obj[i],
      flag: true});
    }
  }
}

const intersection = (arr)=>{
  arr.map(cur=>{
    setValue(cur);
  }) 
}
//intersection([{a:102,b:20,d:30},{a:10,b:20,d:40},{a:10,b:20,d:30},{a:10,b:20,d:30}]);
//intersection([{a:100,b:20},{a:10,b:20}]);
intersection([{a:100,b:20,d:30},{a:10,b:20,d:30}]);
// intersection([{a:100,b:20,d:30},{a:10,b:30,d:40},{a:10,b:20,d:30},{a:10,b:20,d:30}]); 
console.log(result);
