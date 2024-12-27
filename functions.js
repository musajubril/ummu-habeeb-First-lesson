function myFunction(){
    return "Hello World"
}
// function sumAB(a=2, b=3){
//     return a + b
// }
const sumAB = (a=2, b=3) => {
    return a + b
}
function PerimeterOfARectangle(a){
    return 2 * a
}

(function PerimeterOfASquare(){
    console.log("this should show 4*5")
    return 4 * 5
})()
let answer = sumAB()
console.log(answer)

console.log(PerimeterOfARectangle(sumAB(10, 20)))

function MyCalculator(){
    return {
        perimeterOfRectangle: PerimeterOfARectangle(),
        perimeterofSquare: PerimeterOfASquare(),
        test: "This is a test message"
    }
}
// console.log(MyCalculator().test)
const newFunction = ()=>{

}
// function newFunction(){}
(()=>{
    console.log("Hello World this is a self invoking function")
})()
let a = 5
const testRecursion = ()=>{
    console.log("Testing recursion and current value is: ", a)
    if(a!==10){
        a+=1
        testRecursion()
    } else {
        console.log("Recursion ended and the value is: ", a)
    }
}

testRecursion()