// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(name, id) {

        // 3. Call the parent constructor function using the super function
        super()
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = name
        this.id = id
        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument
//Instance 1
var movieTrailer = new Trailer('John Wick 2', 'nMqETeQrgqU')

//Instance 2
var movieTrailer = new Trailer('P.O.C 5', 'lsJ58L3u8qw')

//Instance 3
var movieTrailer = new Trailer('Max Steal', 'Tf4sa0BVJVw')

//Instance 4
var movieTrailer = new Trailer('Justice League', 'fIHH5-HVS9o')


$(document).ready(function(){
    $('button').sparkle({
      color: "#FFFFFF",
      count: 200     ,
      overlap: 0,
      speed: 1,
      minSize: 4,
      maxSize: 7,
      direction: "both",
    })
})
