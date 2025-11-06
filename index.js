// let a = "name";
// let b = 1254;
// let c = true;
// let d = {key:value}
// let e = [0,1,2,3,4,5,6]
// let f = null;
// let g = undefined;

// add();

function add() {
  a = 20;
  let b = 30;
  let c = a + b;
  console.log(c);
}
add();
let book = function () {
  console.log("book");
};
book();


console.log(20+55);
console.log(20-20);
console.log(10*30);
console.log(36/6);
console.log(25%4);

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