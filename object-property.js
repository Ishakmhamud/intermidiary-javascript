const student =[
    {id: 21, name : "aiub"},
    {id: 31, name : "Junayed"},
    {id: 41, name : "Tomal"},
    {id: 51, name : "Promi"}
]

// const classmate = []

// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     classmate.push(element.name) 
// }
// console.log(classmate)

const Names = student.map(s => s.name)
const ids = student.map( s => s.id )

const below = student.filter( s => s.id < 40)
const above = student.find( s => s.id > 40)


console.log(Names)
console.log(ids)

console.log(below)
console.log(above)

