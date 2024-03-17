function aclean(arr) {
  let map = new Map();

  arr.forEach(item => map.set(item.toLowerCase().split('').sort().join(''), item));

  return Array.from(map.values());
  
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));



// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

//console.log(unique(values));



// let set = new Set(['orange', 'apple', 'banana']);

// set.forEach( (val, val2, set) => console.log(val2))

// for (let val of set) console.log(val);

// let set = new Set();

// let john = { name: 'john' };
// let pete = { name: 'pete' };
// let mary = { name: 'mary' };

// set.add(john);
// set.add(mary);
// set.add(pete);
// set.add(john);
// set.add(mary);

// for (let u of set) {
//   console.log(u.name)
// }


// let map = new Map([
//   ['banana', 1],
//   ['orange', 2],
//   ['apple', { name: 'Pavel' }]
// ]);

// let obj = Object.fromEntries(map);

// console.log(obj)




//Object.fromEntries: Object из Map:

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);

// console.log(prices)


// let obj = {
//   name: "John",
//   age: 30 
// };

// let map = new Map(Object.entries(obj));

// console.log(Object.entries(obj));


// let recipeMap = new Map([
//   ['огурец', 500],
//   ['potato', 400],
//   ['onion', 300]  
// ]);

// for (let entry of recipeMap) {
//   console.log(entry[1]); 
// }

// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });







// let john = { name: "John" };

// let map = new Map();

// map.set("1", "str")
//   .set(2, "num")
//   .set(true, 'bool');

// console.log(map)

// let map = new Map();

// map.set('some', "{321: 1}");
// map.set(1, {321: 2});
// map.set(false, 22);

// console.log(map.size);



// function slice(str, start, end) {
//   return Array.from(str).slice(start, end).join('');
// }

// let str = '𝒳😂𩷶';

// console.log(slice(str, 1, 3));


// let str = '𝒳😂';

// let chars = [];

// for (let char of str) {
//   chars.push(char);
// }

// console.log(chars);

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