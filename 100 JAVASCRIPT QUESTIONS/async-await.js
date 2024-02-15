
//always return promise
// async function getData(){
//     return "Gobinda Saha"
// }
// const dataPromise=getData()
// // console.log(dataPromise)
// dataPromise.then((res)=>console.log(res));


// // .then vs async wait
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolve value")
//     },10000);
// });

// //-----using async await
// async function handlePromise1(){
//     const val=await p;
//     console.log(val)
//     console.log("Gobinda Saha");
// }
// handlePromise1();
// // ----using then
// function handlePromise2(){
//     p.then((res)=>console.log(res));
//     console.log("Gobinda Saha")
// }
// handlePromise2();


// .then vs async wait
const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolve value")
    },10000);
});

//-----using async await
// async function handlePromise1(){
//     console.log("Hello World");
//     const val=await p;
//     console.log(val)
//     console.log("Gobinda Saha");
// }
// handlePromise1();
// ----using then
function handlePromise2(){
    console.log("Hello World");
    p.then((res)=>console.log(res));
    console.log("Gobinda Saha")
}
handlePromise2();