let value = "Сюрприз!";

function f() {
  let value = "ближайшее значение";

  function g() {
    console.log(value) // в консоли: напишите alert(value); Сюрприз!
  }

  return g;
}

let g = f();
g();


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