function pow(x, n) {
  if(n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 10));


// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;


// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
// }, 2))



// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// let js = JSON.parse(JSON.stringify(user, '', 2));

// console.log(js)

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(schedule, function (key, value) {
//   if(key == 'date') {
//     return new Date(value);
//   }

//   return value;
// });

// console.log(schedule)

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function (key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// console.log(meetup);

// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// user = JSON.parse(user);

// console.log(user)

// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// console.log(numbers)


// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };

// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// }

// console.log( JSON.stringify(meetup, '', 2))

// let user  = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };

// console.log(JSON.stringify(user, null, 4));

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [
//                   { name: 'John' },
//                   { name: 'Alice' }
//                 ],
//   place: room
// };

// room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//   console.log(`${key}: ${value}`);

//   return key == 'occupiedBy' ? undefined : value;
// }));


//   let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };

// let json = JSON.stringify(student);

// console.log(JSON.parse(json))