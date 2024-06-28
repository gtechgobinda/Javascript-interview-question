// difference between var , let and const

//-------using var---------

// function example() {
//   if (true) {
//     var count = 10;
//     console.log(count);
//   }
//   console.log(count);
// }
// example()

//------using let--------

// function example(){
//     if(true){
//         let count=10;
//         console.log(count);
//     }
//     // console.log(count);
// }
// example()

//--------using const-----------
// const z=10;
// z=11
// console.log(z)
// -------------------String Operations-----------------------------

//-----Add multiple string

// let str1="Hello";
// let str2="World";
// let result=str1+" "+str2;
// console.log(result);

//--------substr()

// let str="Gobinda Saha"
// let part=str.substr(0,7);
// let part =str.substr(8)
// console.log(part);

//-------substring()

// let str="Gobinda Saha"
// let part=str.substring(2,5);
// console.log(part);

//-------replace()

// let text = "Please visit Microsoft and Microsoft!";
// let newText=text.replace("Microsoft","Amazon");
// let newText=text.replace(/Microsoft/g,"Amazon");
// let newText=text.replace(/MICROSOFT/i,"Amazon");
// let newText=text.replace(/MICROSOFT/g,"Amazon");
// console.log(newText);

//------replaceAll()

// let text = "Please visit Microsoft and Microsoft!";
// let newText=text.replaceAll(/Microsoft/g,"Google");
// console.log(newText)

//--------search()

// let text="Gobinda have a house";
// let position=text.search("house");
// console.log(position)

//---------toLocaleLowerCase()

// let text="Hello World";
// let newText=text.toLocaleLowerCase();
// console.log(newText)

//----------toLowerCase()

// let text="Hello World";
// let newText=text.toLowerCase();
// console.log(newText)

//-----------toLocaleUpperCase()

// let text="Hello World";
// let newText=text.toLocaleUpperCase();
// console.log(newText)

//-----------toUpperCase()

// let text="Hello World";
// let newText=text.toUpperCase();
// console.log(newText)

//------------indexOf()

// let text="Gobinda Saha";
// let result=text.indexOf("Saha");
// console.log(result);

//--------includes()

// let text="Hello Gobinda";
// let result=text.includes("Gobinda")
// console.log(result);

//---------slice()

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result=fruits.slice(1,3);
// console.log(result);

//-----------concat()

// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];
// let newArr=arr1.concat(arr2);
// console.log(newArr);

// let str1="Gobinda";
// let str2=" Saha";
// let newStr=str1.concat(str2);
// console.log(newStr);

//---------lastIndexOf()

// let text="My name is Gobinda Saha";
// let result=text.lastIndexOf("Saha");
// console.log(result)

// let text="My name is Gobinda Saha.Saha is my family name";
// let result=text.lastIndexOf("Saha");
// console.log(result);

//----------charCodeAt()

// let text="Gobinda Saha"
// let code = text.charCodeAt(0);
// console.log(code);

//---------trim()

// let text="      Hello World        ";
// let result=text.trim();
// console.log(text);
// console.log(result);

//-----------charAt()

// let text="Gobinda Saha"
// let result=text.charAt(0);
// console.log(result);

//-------------valueOf()

// let text="Gobinda Saha"
// let result=text.valueOf();
// console.log(result);

//---------------- typeof operator ---------------
// let num=42;
// let str="Hello World";
// let bool=true;
// let obj={key:"value"};
// let arr=[1,2,3,4];
// let func=function(){}

// console.log(typeof num)
// console.log(typeof str)
// console.log(typeof bool)
// console.log(typeof obj)
// console.log(typeof func)

//--------------type coercion----------------------

// let string="42";
// let number=42;
// let boolean=true;
// let nullValue=null;

// console.log(string+number);
// console.log(number+boolean);
// console.log(number == string);
// console.log(boolean == 1);
// console.log(boolean + nullValue);

//-----------Operator precedence-------------------

// let a=6;
// let b=3;
// let c=2;
// let result=a+b*c+(a+b);
// console.log(result);

// ----------Operator--------------

//--------Unary Operator

// let a=5;
// let b=-a;
// console.log(b);
// console.log(++a);

//-------Binary Operator

// let x=10;
// let y=3;
// let result=x+y;
// console.log(result);

//--------Ternary Operator

// let result=(2>3) ? 'Yes':'No';
// console.log(result);

//----------Short Circuit---------

// function someFunc(){
//     let result =2+4
// }
// let result=false && someFunc();
// console.log(result);

//---------Condition Statement---------

//----------if/else statement

// let x=5;
// if(x>10){
//     console.log("1");
// }else if(x<5){
//     console.log("2");
// }else{
//     console.log("3")
// }

//---------Ternary Operator
// let y=20;
// let z=y>10?"1":"0";
// console.log(z);

//----------Switch Statement
// let a=6;
// switch(a){
//     case 1:
//         console.log("1");
//         break;

//     case 6:
//         console.log("5");
//         break;

//     default:
//         console.log("3")
// }

//--------------Spread Operator---------------

//-------Spread Operator Examples
// const array=[1,2,3];
// console.log(...array)

//-------Copying an array
// const originalArray=[1,2,3];
// const copiedArray=[...originalArray]
// console.log(copiedArray)

//--------Merging Array
// const array1=[1,2,3];
// const array2=[4,5];
// const mergeArray=[...array1,...array2]
// console.log(mergeArray);

//--------passing multiple argument to a function
// const number=[1,2,3,4,5];

// function sum(a,b,c,d,e){
//     console.log(a+b+c+d+e);
// }

// sum(...number)


//---------Rest Operator--------

// function PersonalInfo(name,age,...hobbies){
//     console.log(`Name: ${name}`);
//     console.log(`Age:${age}`);
//     console.log(`Hobbies: ${hobbies}`)
// }

// PersonalInfo('Gobinda Saha',23,"coding","stock market")

// -----------------Array Methods--------------------

//---------Array Get Methods-----------

//-------indexOf()
// let fruits=["Apple","Banana","Jackfruit","Lichi","Mango"]
// let result=fruits.indexOf("Mango")
// console.log(result)

//--------find()
// const array=[1,2,3,4,5];
// let result=array.find((num)=>num%2===0);
// console.log(result);

//------filter()
// const array=[1,2,3,4,5];
// let result=array.filter((num)=>num%2===0);
// console.log(result);

//------slice()
// const array=["a","b","c","d","e"];
// let result=array.slice(1,4);
// console.log(result);

//-----------Array Add methods--------------

//---------push()
// let array1=[1,2];
// array1.push(3,4);
// console.log(array1);

//---------concat()
// let arr=[1,2,3,4];
// let newArr=arr.concat(5,6);
// console.log(newArr);

//-----------Array Remove methods--------------

//---------pop()
// let arr=[1,2,3,4,5];
// let popped=arr.pop();
// console.log(arr)
// console.log(popped)

//---------shift()
// let arr=[1,2,3,4,5];
// let shifted=arr.shift();
// console.log(arr)
// console.log(shifted)

//------------splice()-----------------

//-----add element

// let letters=['a','b','c'];
// letters.splice(1,0,'x','y');
// console.log(letters)

//-----remove element
// let letters=['a','b','c'];
// letters.splice(1,1);
// console.log(letters)

//-----replace element
// let letters=['a','b','c'];
// letters.splice(2,1,'q');
// console.log(letters)

//-----------Array Modify methods--------------

// ---------map()
// let arr=[1,2,3];
// let mapArr=arr.map((e)=>e*2);
// console.log(mapArr)

//----------forEach()
// let arr = [1, 2, 3];
// arr.forEach((e) => {
//   console.log(e * 2);
// });

//--------Array Other Methods-------------------

//-----------join()
// let arr=["Banana","Apple","Orange"];
// let fruits=arr.join(" and ")
// let fruits=arr.join()
// console.log(fruits);
// console.log(typeof fruits); //return as a string
// console.log(arr)

//-----------length
// let arr=["Banana","Apple","Orange"];
// let arrLength=arr.length;
// console.log(arrLength)

//----------sort()
// let arr=["Banana","Apple","Orange"];
// let sortedArray=arr.sort();
// console.log(sortedArray)

//-----------reverse()
// let arr=["Banana","Apple","Orange"];
// let reversedArray=arr.reverse();
// console.log(reversedArray)

//------------reduce()
// const myNums=[1,2,3];

// const myTotal=myNums.reduce((acc,currVal) =>{
//   console.log(`acc:${acc} and currVal:${currVal}`);
//   return acc + currVal
// },0)
// console.log(myTotal)

//--------------Function------------

//arrowFunction

//-----------callback function
// function display(x,y,operation){
//   var result=operation(x,y)
//   console.log(result)
// }

// function add(x,y){
//   return x+y
// }

// function multiply(x,y){
//   return x*y
// }

// display(5,2,add)
// display(5,2,multiply)

//-----------Hoisting-----------

//-----in case of var
// a=10;
// console.log(a);// output: 10
// var a;

//-----in case of let
// a=10;
// console.log(a);//show reference error
// let a;

//-----in case of const
// a=10;
// console.log(a);
// const a; // can't possibe this way to assign in const

//------------passed by value and passed by reference--------------

//-----------Object Destructuring----------

//normal way before ES6
// const classDetails={
//     student:60,
//     benches:30,
//     window:3,
//     door:1
// }
// const classStudent=classDetails.student;
// const classBenches=classDetails.benches;
// const classWindow=classDetails.window;
// const classDoor=classDetails.door;

// console.log(classStudent)

// ----Using Object Destructuring after ES6
// const classDetails={
//     student:60,
//     benches:30,
//     window:3,
//     door:1
// }
// const {student:classStudent,benches:classBenches,window:classWindow,door:classDoor}=classDetails

// console.log(classStudent);

//--------------Array Destructuring--------------

//-----using array destructuring after ES6
// const arr=[1,2,3,4];
// const[first,second,third,fourth]=arr;
// console.log(first)

//--------------Promises----------------
// let examplePromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Task completed')
//     },2000)
// });

// examplePromise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

//-----------Higher Order Function-------------------
// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     func()
// }

// higherOrderFunction(callbackFunction);
