/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */

//approach #1

//=====================

var promisePool = async function (functions, n) {
  return new Promise((resolve) => {
    let inProgressCount = 0;
    let functionIndex = 0;
    function helper() {
      if (functionIndex >= functions.length) {
        if (inProgressCount === 0) resolve();
        return;
      }

      while (inProgressCount < n && functionIndex < functions.length) {
        inProgressCount++;
        const promise = functions[functionIndex]();
        functionIndex++;
        promise.then(() => {
          inProgressCount--;
          helper();
        });
      }
    }
    helper();
  });
};

const resp = promisePool(
  (functions = [
    () => new Promise((res) => setTimeout(res, 300)),
    () => new Promise((res) => setTimeout(res, 400)),
    () => new Promise((res) => setTimeout(res, 200)),
  ]),
  2
);

console.log(resp);

//approach#2
var promisePool = async function (functions, n) {
  async function nextEvaluate() {
    //if length ==0
    if (functions.length === 0) return;

    //use shift()
    const fn = await functions.shift();
    await fn();
    await nextEvaluate();
  }

  const nPromise = Array(n).fill().map(nextEvaluate);
  await Promise.all(nPromise);
};
