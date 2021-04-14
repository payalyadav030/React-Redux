// 1 way of creating:

let obj = {};
console.dir(obj)

// 2nd way of creating objects: Constructor functions: Object(), String(), Number()
let objCon = new Object();
console.log(objCon)

// On linked objects - __proto__
// On constructors - prototype
// On objects - to find out who created it - constructor property
 
/// when u use a constructor func of ur own, it will create an object, then link the new object to this object.
function personMaker(name){   // this is a function created 
    this.name = name
}
// let Payal = new personMaker("Payal")   // this is a constructor that i have created, it will link to personmaker function but whats the point as PM is a function not object
// console.dir(Payal)

////////////////////////////////////////////////////////////////////////////////
// Inheritance:
// Eg : 
/*
Human, 2 eyes, 2 legs, Asia, China, Chan, 25, white
Dog, 2 eyes, 4 legs, Europe, Italy, Tommy, 6, Grey
Cat, eyes,4 legs, America, North America, kite, 5, pink
Dog, 2 eyes, 4 legs, Asia, India, Rocco, 4, brown
Human, 2 eyes, 2 legs, Asia, India, Payal, 20, white

*/ 
// 1 way of creating inheritance object:
// let Chan ={
//     type:"Human",
//     eyes:2,
//     legs:2,
//     continent:"Asia",
//     nation:"China",
//     age:25,
//     color:"brown"
// }
// let Tommy ={
//     type:"Dog",
//     eyes:2,
//     legs:4,
//     continent:"Europe",
//     nation:"Italy",
//     age:6,
//     color:"grey"
// }
// console.log(Chan, Tommy)  // and so on we will be creating objects for rest but u can see than it will take more effort time and lines 

// Another way: creating the base objects
    // Animals"
//     let human ={
//         type:"Human",
//         eyes:2,
//         legs:2
//     }
//     let Dog ={
//         type:"Dog",
//         eyes:2,
//         legs:4
//     }
//     let Cat ={
//         type:"cat",
//         eyes:2,
//         legs:4
//     }
//     // Nationalities:
//     let India={
//         continent:"Asia",
//         nation:"India"
//     }
//     let China={
//         continent:"Asia",
//         nation:"China"
//     }
//     let Italy={
//         continent:"Italy",
//         nation:"Europe"
//     }
//     let NorthAmerica={
//         continent:"Amercia",
//         nation:" North America"
//     }
//     // creatures:
//     let Payal={
//         name:"Payal",
//         age:20,
//         color:"White"
//     }
//     let Chan={
//         name:"Chan",
//         age:25,
//         color:"White"
//     }
//     let Kite={
//         name:"Kite",
//         age:5,
//         color:"Pink"
//     }
//     let Rocco={
//         name:"Rocco",
//         age:4,
//         color:"Brown"
//     }
//     let Tommy={
//         name:"Tommy",
//         age:6,
//         color:"Grey"
//     }
// console.log(Payal, Chan, Kite, Tommy, Rocco )

// console.log(Payal.age, Payal.nation)
// so to  access the other objects or to set as prototype to one objec:
// Object.setPrototypeOf(Payal, India)
// Object.setPrototypeOf(India, human)
// console.log(Payal.age, Payal.nation, Payal.color)


////////////////////////////////////////////////
// another way of creating objects and adding inheritance through Constructors:
//  let mammal = function(type, legs, eyes){
//     this.type=type;
//     this.legs=legs;
//     this.eyes=eyes
//  }

//  let human = new mammal("human", 2,2)
//  let dog = new mammal("Dog", 4,2)
//  let cat = new mammal("Cat", 4,2)

//  console.log(human, dog, cat)
 
//  let Nationalities = function(continent, nation){
//     this.continent=continent;
//     this.nation=nation
//  }
//  let india = new Nationalities("Asia", "India")
//  let Italy = new Nationalities( "Italy","Europe",)
//  let northAmerica = new Nationalities("America", "North America")

//  console.log(india, Italy, northAmerica)

//  let creatue = function(name, age,color){
//     this.name=name;
//     this.age=age;
//     this.color=color
//  }
//  let payal = new creatue("Payal", 20, "white")
//  let kite = new creatue("Kite", 5, "pink")
//  let Rocco = new creatue("Rocco", 5, "brown")

//  console.log(payal, kite, Rocco)
//  // so inheriting them:
//     Object.setPrototypeOf(payal, india)
//     Object.setPrototypeOf(india, human)
//     Object.setPrototypeOf(Rocco, india)
//     Object.setPrototypeOf(india,dog)

    
//     console.log(payal.name, payal.nation, payal.type)
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// another way of adding inheritance: through Class:
    class Mammal {
        constructor(type, eyes, legs){
            this.type=type;
            this.legs=legs;
            this.eyes=eyes
        }
    }
    class Nationalities extends Mammal{
        constructor( type, eyes, legs,continent, nation,){
            super(type, eyes, legs);
            this.continent=continent;
            this.nation=nation
        }
    }
    class Creature extends Nationalities{
        constructor(type, eyes,legs, continent, nation,name, age, color,){
            super(type, eyes, legs,continent, nation);
            this.name=name;
            this.age=age;
            this.color=color
        }
    }
    // let human = new Mammal("human", 2,2)
    // let dog = new Mammal("Dog", 4,2)
    // let cat = new Mammal("Cat", 4,2)

    // let india = new Nationalities("Asia", "India")
    // let Italy = new Nationalities( "Italy","Europe",)
    // let northAmerica = new Nationalities("America", "North America")

    // let payal = new  Creature("Payal", 20, "white")
    // let kite = new  Creature("Kite", 5, "pink")
    // let Rocco = new  Creature("Rocco", 5, "brown")

    // console.log(payal, india, human)
    // console.log(Rocco, india,dog)

     let Payal = new Creature("Human", 2, 2, "Asia", "India", "Payal", 20, "Brown")
    // let Rocco = new Creature("Rocco", 5, "Brown", "Dog", 2,4,"Asia", "India" )
     console.log(Payal)
    // console.log(Rocco)
