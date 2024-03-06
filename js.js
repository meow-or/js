let str = '𝒳😂';

let chars = [];

for (let char of str) {
  chars.push(char);
}

console.log(chars);

// let chars = Array.from(str);
// console.log(chars[1]); 

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };

// arr = Array.from(range, num => num ** 2);
// arr.push(6);

// console.log(arr)


// let str = 'Hello';

// let iterator = str[Symbol.iterator]();

// while(true) {
//   let res = iterator.next();

//   if (res.done) break;
//   console.log(res.value);
// }

// console.log(iterator);


// for (let char of '𝒳😂') {
//   console.log(char)
// }


// let range = {
//   from: 1,
//   to: 5,


//   [Symbol.iterator] () {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if(this.current <= this.to) {
//       return { done: false, value: this.current++ }
//     } else {
//       return { done: true }
//     }
//   }
// }


// for (let num of range) {
//   console.log(num);
// }

// let range = {
//   from: 1,
//   to: 5
// }

// range[Symbol.iterator] = function() {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if(this.current <= this.last) {
//         return {
//           done: false,
//           value: this.current++
//         }
//       } else {
//         return { done: true }
//       }
//     }
//   }
// }

// for (let num of range) {
//   console.log(num);
// }
// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// function groupById(arr) {
//   return arr.reduce((acc, item) => {
//       acc[item.id] = item;
//     return acc;
//   }, {});
// }

// let usersById = groupById(users);

// console.log(usersById);

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// function uniqArr(arr) {
//   let uniq = [];

//   arr.forEach(item => {
//     !uniq.includes(item) ? uniq.push(item) : null;
//   });

//   return uniq;
// }

// console.log(uniqArr(strings));



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(arr) {
//   let sum=0;

//   for (let item of arr) {
//     sum += item.age;
//   }

//   return sum/arr.length;
// }

// console.log(getAverageAge(arr));


// let arr = [1, 2, 3];

// function getRandomIndex(length) {
//   indexes = [];

//   // for (let i = 0; i < length; i++) {

//   // }

  
// }

// function shuffle(arr) {

// }

// console.log(shuffle(arr));


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// function sortByAge(arr) {
//   return arr.sort((a,b) => a.age - b.age)
// }


// console.log(sortByAge(users));



// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(u => ({
//     fullName: u.name + ' ' + u.surname,
//     id: u.id
//   }));

// console.log(usersMapped);