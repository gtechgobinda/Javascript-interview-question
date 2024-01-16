// difference between var , let and const 

//-------using var--------- 

// function example(){
//     if(true){
//         var count=10;
//         console.log(count);
//     }
//     console.log(count);
// }
// example();

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
// z=20;
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
// // let part =str.substr(8)
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

