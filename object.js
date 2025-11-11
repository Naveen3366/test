// Creation using object literal

// let object = {
//     name:"Suresh",
//     age: 25,
//     job: "developer"
// }
// console.log(object);

//Creation using new Object() Constructor

// let obj = new Object();
// obj.name = "Prakash";
// obj.age = 23;
// obj.job = "Developer";

// console.log(obj);

//Accessing object properties

// let employee = {name:"Naveen",role:"developer",location:"Coimbatore"};
// console.log(employee.location);

// console.log(employee["role"]);


//Modifying object properties

// let obj = {name:"Sourav",age:22};
// console.log(obj);

// obj.age = 23;
// console.log(obj)


// adding properties to an object 


// let obj = {
//     name:"Audi",model:4568
// }
// obj.color = "Green";

// console.log(obj);


//Removing properties from an object

// let obj = {model:2025,brand:"BMW",Fuel:"Gas"};
// delete obj.Fuel;

// console.log(obj);


//Checking if property exists

// let obj = { model: "RangeRover"};
// console.log("color" in obj);

// console.log(obj.hasOwnProperty ("model"));



//Iterating through object properties

// let obj = {name: "sourav",age:25};
// for(let key in obj){
//     console.log(key + ":" + obj[key]);
// }


//Merging Objects

// let obj1 = { name:'sourav',role:"Developer",country:"India",State:"TamilNadu",village:"Sedimuthur"};
// let obj2 = { age : 23,contactno:9698894611,city:"coimbatore"};

// console.log(Object.keys(obj1).length);

// let obj3 = {...obj1, ...obj2};
// console.log(obj3);


//Object Length

// let obj = { name:"sourav",age:23};
// console.log(Object.keys(obj).length);

//recognizing a javascript object

let obj = {name:"Suseendran"};
console.log(typeof obj === "object" && obj !== null);

