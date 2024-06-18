let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  }
}

function inArr(arr) {

}


console.log(arr.filter(inBetween(3, 6)));


// function sum (a) {
//   return function (b) {
//     return a + b;
//   }
// }


// console.log(sum(20)(-8))

// let str = 'hello world';

// console.log([...str])

// function f() {
//   let showArg = () => {
//     console.log(arguments[1]);
//   }

//   showArg(3)
// }

// f(1, 2, 3);

// function sumAll (a, b, ...args) {
//   let sum = 0;

//   for (let arg of args) {
//     sum += arg;
//   }

//   console.log(args);

//   return a + b;
// }

// console.log(sumAll(10, 12, 13, 14, 15, 16, 17, 18));
// function sumTo1(x) {
//   let sum = 0;

//   for (let i = 0; i <= x; i++) {
//     sum += i;
//   }

//   return sum;
// }

// function recSum(x) {

//   if(x == 1) {
//     return x;
//   } else {
//     return x += recSum(x - 1);
//   }

// }

// console.log(recSum(3));