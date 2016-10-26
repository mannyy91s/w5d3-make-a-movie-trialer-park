// //ways of adding somthing to objects
//
// //literal object
// var food = {
//     edible:true
// }
// food.edible = true
// Function
//
// // var pizza = food // this just becomes the alias of food, but doesnt clone it.
// var pizza = Object.create(food) // this clones it and it keeps the values of food earlier while adding another false. This copies variables.
// pizza.edible = false
// console.log(pizza)
// console.log(food)
// //New object mostly used by people coming from other languages. There is no difference just a personal preference.
// var food = new Object()
// food.edible = true
// var tacos = Object.create(food)
//
// //constructor function. When writing constructor function we capitalize first letter of variable so we know its a constructor function and not a normal function. In order to treat it like an object and add meta data use this.edible = true which is adding edible as meta data to it. The purpose of this function is not to run, but to be cloned and used.
// var Food = function(){
//     this.edible = true
//     this.totalEaten = 0
//     this.eat = function(){
//         this.totalEaten++
//         console.log('Now eating ' + this.type + ' 1 of ' + this.totalEaten)
//     }
// }
//
// var pizza1 = new Food()  // this varible is an instance, which means a copy of the master template.
// pizza1.type = 'Taco Pizza'
// console.log(pizza1)
//
// var pizza2 = new Food()
// pizza2.type = 'Margarita Pizza'
// console.log(pizza2)
//
// Food.prototype.calories = 1200

//
// //New way of objects in ES6.
// //this is referring to the object parent vehicle and acts as using var. They dont exists untill u make a copy
// class Vehicle {
//     constructor(make, model){
//         this.make = make
//         this.model = model
//         this.year
//         this.setYear = this.setYear.bind(this) //this is a issue in ES6 that might get fixed. In order to get setYear we use this to bind it to constructor. This is only needed if you make a setyear like below.
//     }
//     setYear(year){
//         this.year = year + ' year'
//     }
//     drive(speed){
//         console.log(`${make}${model} is driving ${speed}mph.`)
//     }
// }
//
// class Toyota extends Vehicle {
//     constructor(model){ // its a magical function that runs any code inside of it at the beginning
//         super('Toyota', model) //always call this function when you use extend. This is the first thing you do. It refers to the parent class you extended. This takes the original contructor and runs that then it runs this new class Toyota. With putting toyota in super we are hard coding it in there and letting only model be put in.
//         // this.make = 'Toyota'
//     }
// }
//
// var $4Runner = new Toyota('4Runner')
// $4Runner.setYear(2006)
// // $4Runner.year = 2006
// console.log($4Runner)
//
// var prius = new Toyota('Prius')
// prius.year = 2008
// console.log(prius)



class Person {
    constructor(height,name){
        this.height = height
        this.name = name
        this.city = 'Indianapolis'
    }

}
class Athlete extends Person{
    constructor(height,name,sport,team){
        super(height,name)
        this.sport = sport
        this.team = team
    }

}
class BaseballPlayer extends Athlete{
    constructor(height,name,position,chewTabaco){
        super(height,name,'baseball','indians')
        this.position = position
        this.chewTabaco = chewTabaco
    }
}

var ourPerson = new Person('6 foot','Randy')
console.log(ourPerson)

var ourAthlete = new Athlete('6 foot','Randy', 'baseball', 'cubs')
console.log(ourAthlete)

var ourPlayer = new BaseballPlayer('6 foot','Randy', 'center', true)
console.log(ourPlayer)
