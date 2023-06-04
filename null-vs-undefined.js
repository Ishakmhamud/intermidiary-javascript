// undefined = the value of this property is not defined
// Null = there is nothing exist

// we can fin undefined in six ways such as:

// type - 1
// let pakhi;
// console.log(pakhi)

// type - 2 [in a function if you don't explete return then it will undefined]
// function add(num1,num2){
//     console.log(num1+num2)

// }
// const result = add(45 , 67)
// console.log(result) 
// // 

// type - 3 [ if you don't give second value the result will be undefined]
function add(num1,num2){
    console.log(num1, num2)
}
const result = add(45 )
console.log(result) 

// type - 4 [as the property is not set that's way it will be undefined]
let premik = {Name : "Rashid", phone : 567894 }
console.log(premik.age)