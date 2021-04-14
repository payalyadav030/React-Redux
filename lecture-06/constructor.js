// simple constructor eg:
// let person = function(name){
//     this.name=name
// }

// let payal = new person("Payal")
// console.log(payal)
// but if write above code with arrow func it will give error:
let person = (name)=>{
    this.name=name
}

let payal = new person("Payal")
console.log(payal) // it is giving an error: as we cant use arrow functions as constructors as this has no prototype property
                    // and also you cannot add duplicate parameters to arrow functions
// So, whenever we are creating constructor we write it with simple function, otherwise we can use arrow function
