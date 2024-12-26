a = 1
function Sum(a, b){
    return a + b;
}
function Subtract(a, b){
    return a - b;
}

function Multiply(a, b){
    return a * b;
}

function Divide(a, b){
    if(b!= 0){
        return a / b;
    }else{
        return "Error: Division by zero is not allowed."
    }
}
while(a > 0){
    let option = prompt(`
    Hello Welcome to MyCalculator.
    What can i do for you today?
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Multiply 2 numbers
    4. Divide 2 numbers
    5. Thank you but nothing for now
    `)
    if(option==1){
        let num1 = Number(prompt("Enter the first number: "))
        let num2 = Number(prompt("Enter the second number: "))
        alert(Sum(num1, num2))
    }
    if(option==2){
        let num1 = Number(prompt("Enter the first number: "))
        let num2 = Number(prompt("Enter the second number: "))
        alert(Subtract(num1, num2))
    }
    if(option==3){
        let num1 = Number(prompt("Enter the first number: "))
        let num2 = Number(prompt("Enter the second number: "))
        alert(Multiply(num1, num2))
    }
    if(option==4){
        let num1 = Number(prompt("Enter the first number: "))
        let num2 = Number(prompt("Enter the second number: "))
        alert(Divide(num1, num2))
    }
    if(option==5){
        alert("Thank you for using MyCalculator. Have a great day!")
        break;
    }
    else{
        alert("Invalid option. Please try again.")
    }
}