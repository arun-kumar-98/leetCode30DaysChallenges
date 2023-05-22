//aproach 1
//for loop with inmemory
var map = function (arr, fn) {
  const newArray = [];

  //iterate

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  console.log(newArray);
};
map([1, 2, 3]);
