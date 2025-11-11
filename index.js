// let a = "name";
// let b = 1254;
// let c = true;
// let d = {key:value}
// let e = [0,1,2,3,4,5,6]
// let f = null;
// let g = undefined;

// add();

// function add() {
//   a = 20;
//   let b = 30;
//   let c = a + b;
//   console.log(c);
// }
// add();
// let book = function () {
//   console.log("book");
// };
// book();


// console.log(20+55);
// console.log(20-20);
// console.log(10*30);
// console.log(36/6);
// console.log(25%4);

let value =15;
value = value+1;
console.log(value);

let number = 20;
number++;
++number;
console.log(number);

console.log(!(10>4));
console.log(!false);


function greet(name){
  return `Hello, ${name}!`;
}
console.log(greet("Meeta"));


function add(a,b){
  return a + b ;
}
console.log(add(5,10));
console.log(add(5));





// Functions with parameters



//Default Parameters

function mul(a,b=1){
  return a * b;
}
console.log(mul(5));
console.log(mul(5,2));



//Rest Paramaters

 function sum(...numbers){
  return numbers.reduce((total,num) => total+num+0);
 }
console.log(sum(1,2,3,4));


//Destructured Parameters

function displayUser({name,age}){
  return `${name} is ${age} years Old`;
}
const user = { name: "Meeta",age:25};
console.log(displayUser(user));


//passing functions as parameters
 function executeTask(task,callback) {
    console.log(`Task:${task}`);
    callback();    
 }
executeTask("Clean the Room",()=>{
  console.log("Task Completed!");  
});



//Array

// let a = []; //Empty array
// console.log(a); 


// // creating a array and Initializing with Values

// let b = [10,20,30];
// console.log(b);




// let a1 = new Array (10,20,30,);
// console.log(a1);




// let c = ["Html","Css","Js"];

// console.log(c[0]);
// console.log(c[2]);



// let d = ["Html","Css","js"]
// let fst = d[0];

// console.log("First Item:",fst);



// let e = ["Html","Css","Js"];
// console.log(e);

// e[2] = "Bootstrap";
// console.log(e);


/* let a = ["Html","Css","Js"];
let list = a[a.length -1];

console.log("FirstItem:",list); */


// let a = ["Html","Css","Js"];
// console.log(a);

// a[1] = "Bootstrap";
// console.log(a);


//Adding Elements to the Array

// let a = ["Html","Css","Js"];
// a.push ("Node.js");


// a.unshift("Web development");
// console.log(a);


//Removing Elements From an array


// let b = ["Html","Css","Js"];
// console.log("Original Array:" + b);


// let lst = b.pop();
// console.log("After Removing the Last:" + b)

// let fst = b.shift();
// console.log("After removing the first:" + b);

// b.splice(1,2);
// console.log("After removing 2 elements starting from index 1:" + b);


//Array push

// let c = [10,20,30,40,50,60];
// c.push(70);
// c.push (70,80,90,100,110,180);

// console.log(c);


// let a = [20, 30, 40, 50];
// a.splice(1, 3);
// console.log(a);


// // Array Filter

// let b1 = [1,2,3,4,5,6];
// let b2 = b1.filter((num)=>num>1);
// console.log(b2);





//Array Length

// let a = ["Html","Css","Javascript","Bootstrap"];
// console.log(a.length);





//Array to string

//  let a = ["Html","Css","Javascript","Bootstrap"]; 
//  let s = a.toString();
//  console.log(s);




 //Array join Method

//  let a = ["Html","Css","js","React"];
//  console.log(a.join('|'));
 


//Array delete operator

// let emp = {
//   firstName : 'Riya',
//   lastName: 'kaur',
//   salary : 40000,
// }

// console.log(delete emp.salary);
// console.log(emp);


//Array Concat

// let a1 = [11,12,13];
// let a2 = [14,15,16];
// let a3 = [17,18,19,20];

// let newArr = a1.concat(a2,a3);
// console.log(newArr);


//Array Flat 

// const a1 = [['1','2'],['4','5','6',['7'],'8']];
// const a2 = a1.flat(Infinity);

// console.log(a2);


//Array.push

// let a = [10,20,30,40,50,60,70,80];
// a.push(90);
// a.push(100,110,120,130);

// console.log(a);


//Array Unshift

// let a = [40,50,60,70,80,90];
// a.unshift(10,20,30);
// console.log(a);


//Array pop

// let a = [10,20,30,40,50,60,70,80,90];
// a.pop();
// console.log(a);


// //Array Shift
// let a = [20,30,40,5,60,70,80,90];
// a.shift();
// console.log(a);


//Array Splice

// let a = [20,30,40,50,60,70,80];
// a.splice(1,3);
// a.splice (1,0,3,4,5,6,);
// console.log(a);


//Array.slice

// const a = [1,2,3,4,5,6,7];
// const res = a.slice(1,4);
// console.log(res);
// console.log(a);


//Array some()

// const a = [1,2,3,4,5,6];
// let res = a.some((val)=>val>4);
// console.log(res);


//Array Map 

// let a = [4,9,16,25];
// let sub = a.map(geeks);

// function geeks(){
//   return a.map(Math.sqrt);
// }

// console.log(sub);



//Array filter


// let a1 = [1,2,3,4,5,6];
// let a2 = a1.filter((num)=>num>1)
// console.log(a2);


//Array Reduce

// let a = [88, 50, 25, 10];
// let sub = a.reduce(geeks);


// function geeks(tot,num){
//   return tot - num;
// }
// console.log(sub)



//Array reverse

// let a = [1,2,3,4,5,6,7,8,9];
// a.reverse();
// console.log(a);


//Array values


const a = ["Apple","Grapes","Banana","water melon","jackfruit","Orange"];
const res = a.values();

for(const value of res)
   {
 console.log(value);
}



