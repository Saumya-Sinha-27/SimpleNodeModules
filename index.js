
var rect = require('./rectangle')

const solveRectangle = (l, b) => {
    console.log("The length and breadth of the rectangle are "+l+" and "+b)
    rect(l, b, (err, rectangle) => {
        if(err){
            console.log("Error "+err.message)
        }
        else{
            console.log("The perimeter is "+rectangle.perimeter())
            console.log("the area is "+rectangle.area())
        }
    })
}

solveRectangle(3, 4)
solveRectangle(0, 5)
solveRectangle(6, 4)