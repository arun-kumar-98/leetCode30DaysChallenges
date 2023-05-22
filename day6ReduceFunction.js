/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  acc = init;
  // for(let i=0;i<nums.length;i++){
  //     acc=fn(acc,nums[i])

  // }return acc;

  return nums.forEach((ele) => (acc = fn(acc, ele))) || init;

  //for...of
  // for(const element of nums){
  //     acc=fn(acc,element)
  // }return acc;

  //for..in

  // for(const index in nums){
  //     acc=fn(acc,nums[index])
  // }
  // return acc;

  //forEach
  // nums.forEach((element)=>{
  //     acc=fn(acc,element)
  // })
  // return  acc;
};
