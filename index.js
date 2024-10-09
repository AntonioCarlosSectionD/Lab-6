//Task1
console.log("Task 1")

let myNumber = 10

let myString = "Hello Javascript!"

console.log(myNumber)

console.log(myString)

//Task2
console.log("Task 2.1")

//i starts at 0. while i is less than 10, the loop will keep adding 1
for (i = 0; i <= 10; i++) {
    console.log(i)
}

console.log("Task 2.2")

//i starts at 1. while i is less than 5 (for the 5 multiples), the loop will keep adding 1.
for (i = 1; i <= 5; i++) {
    let multiple = (i * 3) //it will multiply 1*3 first, then 2*3 second.... and so on
    console.log(multiple)
}

//Task3
console.log("Task 3.1")

function addNumbers(num1, num2) { 
    let result = num1 + num2 //this creates a variable where it adds the two parameters
    return result
}

console.log(addNumbers(10, 11)) //this calls the function and fills the two parameters

console.log("Task 3.2")

function multiplyNumbers(num_1, num_2) {
    let sum = num_1 * num_2 //this creates a variable where it multiplies the two parameters
    return sum
}

console.log(multiplyNumbers(7, 3)) //this calls the function and fills the two parameters
