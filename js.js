let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [
                  { name: 'John' },
                  { name: 'Alice' }
                ],
  place: room
};

room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);

  return key == 'occupiedBy' ? undefined : value;
}));









//   let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };

// let json = JSON.stringify(student);

// console.log(JSON.parse(json))