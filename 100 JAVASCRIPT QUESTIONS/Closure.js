// function outerFunction() {
//   let outerVariable = "I am from the outer function";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// outerFunction();
// let closureExample = outerFunction();
// closureExample();



// function createCounter(){
//   let counter=0;
//   const counterObject={
//     getCounter:function(){
//       return counter;
//     },
//     increment:function(){
//       counter++
//     },
//     decrement:function(){
//       counter--
//     },
//     reset:function(){
//       counter=0
//     }
//   };
//   return counterObject;
// }

// const myCounter=createCounter();
// console.log(myCounter.getCounter());
// myCounter.increment();
// myCounter.increment();
// console.log(myCounter.getCounter());
// myCounter.decrement();
// myCounter.decrement();
// console.log(myCounter.getCounter());



// simple example

function outerFunction(){
  let outerVariable="I am a outer function"
  function innerFunction(){
    console.log(outerVariable)
  }
  return innerFunction
}

// outerFunction()()
const closureFunction =outerFunction()
closureFunction()