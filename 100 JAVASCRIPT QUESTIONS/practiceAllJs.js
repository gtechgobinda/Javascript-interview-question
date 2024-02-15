// var vs let vs const

// function example() {
//   if (true) {
//     var count = 10;
//     console.log(count);
//   }
//   console.log(count);
// }
// example();

// function example(){
//     if(true){
//         let a=10;
//         // console.log(a)
//     }
//     console.log(a)
// }
// example();

// function example(){
//     if(true){
//         const a=10;
//         console.log(a)
//     }
// }
// example()

// a=5;
// console.log(a)

// var a;

// a=5;
// console.log(a);
// let a;

// a=5
// console.log(a)
// const a;

function callbackFunction(){
    console.log('I am callback Function')
}

function func2(func){
    console.log("I am function2")
    func()
}

// func2(callbackFunction);

// synchronous vs Asynchronous

// Synchronous
// console.log("Start");

// setTimeout(()=>{
//     console.log("Process");
// },1000)

// console.log("End");

// console.log("start");
// function importantAction(username){
//     setTimeout(()=>{
//         return `Subscribe to ${username}`
//     },1000);
// }
// const message=importantAction("Roadside Coder");
// console.log(message);
// console.log("stop");

//usig callback
// console.log("start");
// function importantAction(username, callbackFn) {
//   setTimeout(() => {
//     callbackFn(`Subscribe to ${username}`);
//   }, 1000);
// }
// const message = importantAction("Gobinda Saha", function (message) {
//   console.log(message);
// });
// console.log("stop");

console.log("Start");
function importantAction(username, callbackFn) {
  setTimeout(() => {
    callbackFn(`Subscribe to ${username}`);
  }, 1000);
}
const message=importantAction("Gobinda Saha",function(message){
  console.log(message)
})
console.log("End");