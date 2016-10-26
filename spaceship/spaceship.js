// Object Literal
var spaceship1 = {
    make: 'Galaxy Cruiser',
    takeOff: function(speed){
        console.log(this.make +' launching to infinity and beyond at ' + speed + 'lyph')
    }

}
spaceship1.takeOff(800)

// Object New Method
var spaceship2 = new Object()
spaceship2.make = 'Galaxy Zruiser'
spaceship2.takeOff = function(speed){
    console.log(this.make +' launching to infinity and beyond at ' + speed + 'lyph')}

spaceship2.takeOff(700)

// Constructor Function Objects
var Spaceship = function(){
    this.make = 'Galaxy Loser'
    this.takeOff = function(speed){
        console.log(this.make +' launching to infinity and beyond at ' + speed + 'lyph')
    }
}

var spaceship3 = new Spaceship()
spaceship3.takeOff(780)

// Class Objects
class Spaceships {
    constructor(make,model,speed){
        this.make = 'Galaxy Bruiser'
    }
    takeOff(speed){
        console.log(this.make +' launching to infinity and beyond at ' + speed + 'lyph')
    }
}

var spaceship4 = new Spaceships()
spaceship4.takeOff(890)
