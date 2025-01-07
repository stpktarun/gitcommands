// const addNum = (num1, num2) => num1 + num2

// console.log(addNum(5,6))

class Person{
constructor(firstName, age, dob){
    this.firstName = firstName
    this.age = age
    this.dob = dob
}}

const person1 = new Person('tarun','27','20-4-97')


for(n in person1){
    console.log(n)
}