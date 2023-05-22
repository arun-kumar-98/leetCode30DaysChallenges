/**
 * PROBLEM STATEMENT
 * -==================
 * Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

Please solve it without the built-in Array.filter method.


 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

//=================================
//  APPROACH:#1   for loop       ||
//=================================

var filter = function (arr, fn) {
  //   const filterArray=[];
  //iterate over for loop

  //         for(let i=0;i<arr.length;i++){
  //             //check callback function for truthy values

  // if(fn(arr[i],i)){
  //                 filterArray.push(arr[i])
  //             }

  //     }return filterArray;

  //========================
  // APPROACH#2           ||
  //========================
  //using for...in loop

  // for(const index in arr){
  //     let i=Number(index);

  //     if(fn(arr[i],i)){
  //         filterArray.push(arr[i])
  //     }

  // }
  // return filterArray

  // };
  //==========================
  //APPROACH#3              ||
  //==========================
  //pre allocate memory
  // define innitil size =0;
  let size = 0;
  // const  resizeableArray=new Array(arr.length);
  // for(let i=0;i<arr.length;i++){
  //     if(fn(arr[i],i)){
  //         resizeableArray[size]=arr[i];
  //         size++;
  //     }

  // }
  // //check size of nee arr  length to size of old array
  // while(resizeableArray.length>size){
  // resizeableArray.pop()
  // }
  // return resizeableArray

  //=====================================
  //APPROACH#4  WITHOUT AUXILARY SPACE  ||
  //======================================

  //auxilary  working on same array

  //iterate
  // for(let i=0;i<arr.length;i++){
  //     //check callback
  //     if(fn(arr[i],i)){
  //         arr[size]=arr[i];
  //         size++;
  //     }
  // }

  // // check size

  // while(arr.length>size){
  //     arr.pop()
  // }return arr;

  //=======================================
  // BUILT-IN FUNCTION(ARRAY.FILTER())   ||
  //=======================================

  // using predefine method array.filter()
  //checking purpose not recomded in this approach
  return arr.filter(fn);
};
