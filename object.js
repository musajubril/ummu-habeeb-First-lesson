const first_name = "Musa"
const person = {
    first_name,
    age: 10,
    address: {
        street: "Adegbite",
        city: "Abuja",
        country: "Nigeria"
    },
    draw: ()=>{
        console.log(`Drawing polygon for ${first_name}`);
    }
}
console.log(person.draw())