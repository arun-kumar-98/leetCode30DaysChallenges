//aproach 1:
//CLOSURE
var createCounter = function (n) {
  let currentCount = n;
  return {
    increment: function () {
      currentCount += 1;
      return currentCount;
    },
    decrement: function () {
      currentCount -= 1;
      return currentCount;
    },
    reset: function () {
      currentCount = n;
      return currentCount;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

/**
 * APPROACH 2:
 *
 * CLOSURE WITH SHORTHAND
 */

// var createCounter = function (n) {
//   let currentCount = n;
//   return {
//     increment: () => ++currentCount,
//     decrement: () => --currentCount,
//     reset: () => (currentCount = n),
//   };
// };

// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());

/**
 * APPROACH ##3
 *
 *
 *
 * CLOSURE WITH SEPERATE FUNCTION
 */

//TODO: WRITE DOWN

/**
 *
 * APPROACH ##4
 *
 * WITH CLASS
 */

// class Counter {
//   constructor(init) {
//     this.init = init;
//     this.currentCount = init;
//   }
//   increment() {
//     ++this.currentCount;
//     return this.currentCount;
//   }
//   decrement() {
//     --this.currentCount;
//     return this.currentCount;
//   }
//   reset() {
//     this.currentCount = this.init;
//     return this.currentCount;
//   }
// }

//================================================//
//================================================//
//================================================//

/**
 * APPROACH ##5
 *
 * CLOSURE WITH PROXY
 * 
 * Rather than returning a normal object, we can return a Proxy which emulates the behavior of an object with methods.\
 *  We can do this by listening to all property access (get) events and if the requested key matches the name of a method, 
 * perform the appropriate logic.
Note that this solution is primarily for demonstration purposes. 
Proxies are a very powerful tool and their use should be reserved for situations that absolutely require them.
 */

// const createCounter = function (init) {
//   let currentCount = init;
//   return new Proxy(
//     {},
//     {
//       get: (target, key) => {
//         switch (key) {
//           case "increment":
//             return () => ++currentCount;
//           case "decrement":
//             return () => --currentCount;
//           case "reset":
//             return () => (currentCount = init);
//           default:
//             throw Error("Unexpected Method");
//         }
//       },
//     }
//   );
// };

//const counter = createCounter(5);
