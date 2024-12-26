a = 10
let randomNumber;
// while(a!==randomNumber){
//     num = Math.floor(Math.random() * 100) + 1
//     console.log(randomNumber, num)
//     randomNumber = num;
// }
for(let i = 100; i >= a; i-=5){
    let num = Math.floor(Math.random() * 100) + 1
    console.log(randomNumber, num, i)
        randomNumber = num;
}