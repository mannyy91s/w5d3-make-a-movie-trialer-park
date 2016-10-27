// Object Literal
var spaceship1 = {
    // make: 'Galaxy Cruiser',
    takeOff: function(make,speed){
        console.log(make +' launching to infinity and beyond at ' + speed + 'lyph')
    }

}
spaceship1.takeOff('Galaxy Cruiser',800)
//adventure mode
var newShip = Object.create(spaceship1)
newShip.takeOff('Galaxy1', 100)


// Object New Method
var spaceship2 = new Object()
// spaceship2.make = 'Galaxy Zruiser'
spaceship2.takeOff = function(make,speed){
    console.log(make +' launching to infinity and beyond at ' + speed + 'lyph')}

spaceship2.takeOff('Galaxy Zruiser', 700)
//adventure mode
var newShip2 = Object.create(spaceship2)
newShip.takeOff('Galaxy1', 200)


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



//epic mode
class Visual {
    launch(){
        document.querySelector('img').classList.add('ship animated bounceOutUp')
    }
}
var visualSpaceship = new Visual()
    // function animationLoop(){
    //     var flyingShip = document.querySelector('.ship')
    //     // var top = Number(getComputedStyle(circle).top.replace('px',''))
    //     var left = Number(getComputedStyle(flyingShip).left.replace('px',''))
    //
    //     if(left === 10){
    //         // top ++
    //         left ++
    //     }
    //     else if(left === 900){
    //         // top = 410
    //         left = 0
    //     }
    //     // circle.style.top = top + 1 + 'px'
    //     flyingShip.style.left = left + 1 + 'px'
    //     animationId = requestAnimationFrame(animationLoop)
    // }
    // animationLoop()
