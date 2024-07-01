// data type
// string

//-------promise
// function fetchData(){
//     return new Promise((resolve)=>{
//       setTimeout(()=>{
//         resolve("Data Received")
//       },2000)
//     })
//   }

//   async function getData(){
//     console.log("fetching the data");
//     const data=await fetchData();
//     console.log(data);
//   }
//   getData()

//-------callback function
// function callbackFunc(){
//     console.log("I am Callback Func")
// }

// function HigerOrderFunc(func){
//     console.log("I am Higher Order Function")
//     func()
// }

// HigerOrderFunc(callbackFunc)

//--------var vs let vs const--------

// var functional/global scope
// function exampleVar() {
//   if (true) {
//     var x = 10;
//     console.log(x);
//   }
//   console.log(x);
// }
// exampleVar()

// let block scope
// function exampleLet(){
//     if(true){
//         let y=10;
//         console.log(y)
//     }
//     console.log(y)
// }
// exampleLet()

// const block scope
// function exampleConst(){
//     if(true){
//         const z=10;
//         console.log(z)
//     }
//     console.log(z)
// }
// exampleConst()

// //------temporal deadzone example
//     console.log(a) // undefined
//     console.log(b)   //can't access before initialized
//     console.log(c) //can't access before initialized

//     var a=10;
//     let b=20;
//     const c=30;

//     console.log(a) //10
//     console.log(b) //20
//     console.log(c) //30

// -----setTimeOut

// setTimeout(() => {
//   console.log("Hello World");
// }, 20000);

// // -----setInterval
// setInterval(()=>{
//     console.log("Klizo")
// },1000)

// // ---------callback hell
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback(10);
//   }, 1000);
// }
// function step2(step1Result, callback) {
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     callback(step1Result + 10);
//   }, 1000);
// }
// function step3(step2Result, callback) {
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     callback(step2Result + 10);
//   }, 1000);
// }

// step1((result1) => {
//   step2(result1,(result2) => {
//     step3(result2,(result3)=>{
//         console.log(result3)
//     })
//   });
// });

//----using async await (alternative way callback)
// function step1() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Step 1 completed");
//         resolve(10);
//       }, 1000);
//     });
//   }
//   function step2(step1Result) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Step 2 completed");
//         resolve(step1Result + 10);
//       }, 1000);
//     });
//   }
//   function step3(step2Result) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Step 2 completed");
//         resolve(step2Result + 10);
//       }, 1000);
//     });
//   }

// const executedAllSteps = async () => {
//     try {
//         const result1 = await step1();
//         const result2 = await step2(result1);
//         const finalResult = await step3(result2);
//         console.log('Final result:', finalResult);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };
// executedAllSteps();

//-----map()
// const numbers = [1, 2, 3, 4, 5];
// const doubled=numbers.map((item)=>(item*2))
// console.log(numbers);
// console.log(doubled);

//-----filter()
// const numbers=[1,2,3,4,5];
// const filteredNums=numbers.filter((number)=>(number>=3))
// console.log(numbers);
// console.log(filteredNums);

// // ------reduece()
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum);

//-----forEach()
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) => {
//   array[index] = number * 2;
// });
// console.log(numbers)

//----closure
function outerFunc() {
  let outerVariable = "I am outer function";
  function innerFunc() {
    console.log(outerVariable);
  }
  return innerFunc;
}

const inner = outerFunc();
inner();
