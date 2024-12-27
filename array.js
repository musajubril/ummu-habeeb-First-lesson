const people = ["Musa", "Mary", "John", "Maria", "Joy", "Ada", "Musa"]
const ages = [2, 3, 4, 5, 16, 7, 8, 1, 10]

// console.log(people)
// people.unshift("Nafiu")
// console.log(people.slice(0,5))
const newPeopleArray = people.map(person=>{
    return person.toUpperCase()
})

// console.log(newPeopleArray)

const reducedAge = ages.reduce((acc, age)=>{
    // console.log(acc, age)
    if(acc < age){
        return acc
    } else {
        return age
    }
    // return acc + age
}, 0)
// console.log(reducedAge)

const newPeople = [
    {name: "Musa", age: 2},
    {name: "Mary", age: 3},
    {name: "John", age: 4},
    {name: "Maria", age: 5},
    {name: "Joy", age: 16},
    {name: "Ada", age: 7},
]

const newNewPeople = []

const averageAge = (newPeople.reduce((acc, person) =>{
    return acc + person.age
},0))/newPeople.length
console.log(averageAge)

for (var i = 0; i < newPeople.length; i+=1){
    if(newPeople[i].age > averageAge){
         newNewPeople.push({
            name: newPeople[i].name,
            age: newPeople[i].age,
            isAboveAverageAge: true
        })
    } else {
        newNewPeople.push({
            name: newPeople[i].name,
            age: newPeople[i].age,
            isAboveAverageAge: false
        })
    }
}
// console.log(newNewPeople)

const newMapPeople = newPeople.map(person=>{
    return {
        name: person.name,
        age: person.age,
        isAboveAverageAge: person.age > averageAge
    }
})
console.log(newMapPeople)
[[1,2], [3,4], [5,6], [7,8]]
