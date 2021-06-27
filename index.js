var rect = {
    perimeter : (x, y) => (2*(x+y)),
    area : (x,y) => (x*y)
}

const solveRectangle = (l, b) => {
    console.log("The length and breadth of the rectangle are "+l+" and "+b)
    if(l<=0 || b<=0){
        console.log("The length and breadth should be greater than zero for a valid rectangle to exist.")
    }
    else{
        console.log("The perimeter of the rectangle is "+rect.perimeter(l, b))
        console.log("The are of the rectangle is "+rect.area(l, b))
    }
}

solveRectangle(3, 4)
solveRectangle(0, 5)
solveRectangle(6, 4)