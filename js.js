function diffSub(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();

  for (let i = 0; i < 100000; i++) {
    f(date1, date2);
  }

  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

bench(diffSub);
bench(diffGetTime);

for (let i = 0; i < 10; i++) {
  time1 += bench(diffSub);
  time2 += bench(diffGetTime);
}

console.log(time1, time2)

//console.log(bench(diffSub), bench(diffGetTime));


// let start = Date.now();

// for (let i = 0; i < 100000; i++) {
//   let d = i ** 3;
  
// }

// let end = Date.now();

// console.log(end - start);


// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let dos = i * i * i * i * i;
// }

// let end = new Date();

// console.log(end - start)


// let date = new Date(2016, 1, 28);

// date.setDate(date.getDate() + 2);

// console.log(date);

// let date = new Date(2013, 0, 34);
// console.log(date);


// let today = new Date();

// today.setHours(0,0,0,0);

// console.log(today);

// let date = new Date();

// console.log(date.getHours(), date.getUTCHours());

// console.log(date.getTimezoneOffset());


// let j1 = new Date(0);
// let j2 = new Date(24 * 3600 * 1000);
// let date = new Date("2014-01-25");

// let data = new Date(2011, 0, 1);
// console.log(data)

//let date = new Date(2024,3,22,14,12,5,994);

//console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());

//console.log(date.getUTCFullYear())
