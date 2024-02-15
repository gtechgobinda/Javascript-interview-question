//--- normal functional programming
// const user={
//     firstName:'Gobinda',
//     lastName:'Saha',
//     age:24
// }

// function getAgeYear(age){
//     return new Date().getFullYear() - age
// }

// console.log(getAgeYear(user.age))

// object oriented programming language
const user = {
  firstName: "Gobinda",
  lastName: "Saha",
  age: 24,
  getAgeYear: function () {
    return new Date().getFullYear() - user.age;
  }
};

console.log(user.getAgeYear());
