function myFunction(){
    return "Hello World"
}
function sumAB(a=2, b=3){
    return a + b
}
function PerimeterOfARectangle(){
    return 2 * sumAB(10, 20)
}

function PerimeterOfASquare(){
    return 4 * 5
}
let answer = sumAB()
// console.log(answer)

// console.log(PerimeterOfARectangle())

function MyCalculator(){
    return {
        perimeterOfRectangle: PerimeterOfARectangle(),
        perimeterofSquare: PerimeterOfASquare(),
        test: "This is a test message"
    }
}
console.log(MyCalculator().test)