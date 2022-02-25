var arr = [1,2,3,[4,5,6,7,[8,9,10,[11,12,13]],14]]
//var arr = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];
//var arr = [[0, 1], [2, 3], [4, 5]];

var flatten = function(arr){
  let arr2 = [];
  arr.map(cur => {
    if(Array.isArray(cur)){
      arr2.push(...flatten(cur))
    }else{
      arr2.push(cur);
    }
  })
  return arr2;
}

res = flatten(arr);
console.log(res);
