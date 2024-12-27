Here are some tasks and assessments designed for a beginner in JavaScript, focusing on functions, arrays, and objects. These tasks progress in complexity and will help reinforce the foundational concepts of JavaScript.

### 1. **Functions:**

#### Task 1: **Simple Function Declaration**
Write a function called `greet` that accepts a person's name as an argument and returns a greeting string like "Hello, [name]!".

```javascript
function greet(name) {
    // Your code here
}
```

#### Task 2: **Return the Sum**
Write a function called `addNumbers` that accepts two numbers as arguments and returns their sum.

```javascript
function addNumbers(a, b) {
    // Your code here
}
```

#### Task 3: **Multiply Numbers (with Default Parameter)**
Write a function `multiply` that accepts two numbers. If the second number is not provided, the function should default to multiplying by 1.

```javascript
function multiply(a, b = 1) {
    // Your code here
}
```

#### Task 4: **Check if Even or Odd**
Create a function `isEven` that takes a number as input and returns `true` if the number is even and `false` if the number is odd.

```javascript
function isEven(num) {
    // Your code here
}
```

#### Task 5: **Function Expression**
Create a function expression `multiplyByTwo` that takes a number as an argument and returns the number multiplied by two.

```javascript
const multiplyByTwo = function(num) {
    // Your code here
}
```

---

### 2. **Arrays:**

#### Task 6: **Array Length**
Write a function `getArrayLength` that accepts an array and returns the length of the array.

```javascript
function getArrayLength(arr) {
    // Your code here
}
```

#### Task 7: **Find the Largest Number**
Write a function `findLargest` that takes an array of numbers as input and returns the largest number in the array.

```javascript
function findLargest(arr) {
    // Your code here
}
```

#### Task 8: **Sum of Array**
Write a function `sumArray` that takes an array of numbers and returns the sum of all the numbers.

```javascript
function sumArray(arr) {
    // Your code here
}
```

#### Task 9: **Filter Odd Numbers**
Write a function `filterOddNumbers` that accepts an array of numbers and returns a new array containing only the odd numbers.

```javascript
function filterOddNumbers(arr) {
    // Your code here
}
```

#### Task 10: **Reverse Array**
Create a function `reverseArray` that takes an array and returns a new array with the elements in reverse order.

```javascript
function reverseArray(arr) {
    // Your code here
}
```

---

### 3. **Objects:**

#### Task 11: **Create an Object**
Write a function `createPerson` that creates and returns an object representing a person with properties: `name`, `age`, and `job`.

```javascript
function createPerson(name, age, job) {
    // Your code here
}
```

#### Task 12: **Access Object Properties**
Write a function `getJob` that accepts an object with properties `name`, `age`, and `job`, and returns the job of the person.

```javascript
function getJob(person) {
    // Your code here
}
```

#### Task 13: **Update Object Properties**
Write a function `updateAge` that accepts an object representing a person and a new age, and updates the person's age.

```javascript
function updateAge(person, newAge) {
    // Your code here
}
```

#### Task 14: **Nested Objects**
Create a function `getCity` that takes an object representing a person with a nested address object (`address: { city: '...' }`), and returns the city name.

```javascript
function getCity(person) {
    // Your code here
}
```

#### Task 15: **Object Destructuring**
Write a function `describePerson` that accepts a person object with properties `name`, `age`, and `job`, and logs a sentence using destructuring like: "Name is [name], age is [age], and works as [job]."

```javascript
function describePerson(person) {
    // Your code here
}
```

---

### 4. **Combined: Functions, Arrays, and Objects**

#### Task 16: **Array of Objects**
Create a function `getPeopleAboveAge` that takes an array of person objects (with properties `name`, `age`, `job`) and returns a new array with people older than a given age.

```javascript
function getPeopleAboveAge(people, age) {
    // Your code here
}
```

#### Task 17: **Summing Object Values**
Write a function `sumValues` that accepts an object where values are numbers and returns the sum of all the values.

```javascript
function sumValues(obj) {
    // Your code here
}
```

#### Task 18: **Flattening an Array of Arrays**
Write a function `flattenArray` that accepts an array of arrays and returns a single flattened array with all the elements.

```javascript
function flattenArray(arr) {
    // Your code here
}
```

#### Task 19: **Sort Objects by Property**
Write a function `sortByAge` that accepts an array of person objects and sorts them by age in ascending order.

```javascript
function sortByAge(people) {
    // Your code here
}
```

#### Task 20: **Count Occurrences in Array**
Create a function `countOccurrences` that takes an array of numbers and returns an object where the keys are the numbers and the values are how many times they appear in the array.

```javascript
function countOccurrences(arr) {
    // Your code here
}
```

---

### Bonus Challenge: **Combine All Concepts**

#### Task 21: **Create a Contact List**
Write a program that manages a contact list. You should:

- Create an array of objects, each representing a contact with properties: `name`, `phoneNumber`, `email`.
- Write functions to:
  - Add a new contact
  - Delete a contact by name
  - Update a contact's phone number by name
  - Find a contact by email

```javascript
let contacts = [
    { name: 'John', phoneNumber: '123-456-7890', email: 'john@example.com' },
    // Add more contacts
];

function addContact(name, phoneNumber, email) {
    // Your code here
}

function deleteContact(name) {
    // Your code here
}

function updatePhoneNumber(name, newPhoneNumber) {
    // Your code here
}

function findContactByEmail(email) {
    // Your code here
}
```

---

These tasks should provide a solid foundation in JavaScript, especially focusing on functions, arrays, and objects, while also reinforcing key programming concepts like iteration, logic, and manipulation of data structures.