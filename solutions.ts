// problem no-1:

function filterEvenNumbers(numbers: number[]):number[]{
    return numbers.filter(number => number %2 ===0)
}
// console.log(filterEvenNumbers([1,2,3,4,5,6]))
 
// problem no-2:
function reverseString(stri: string): string{
    return stri.split("").reverse().join(""
    )
}
// console.log(reverseString("Nafisa"))

// problem no-3:
type StringOrNumber = string | number;
function  checkType (value: StringOrNumber): string {
    if (typeof value === "string"){
        return "String"
    }
    else {
        return "Number"
    }
}
// console.log(checkType("Hello"))
// console.log(checkType(42))

// problem no-4:
 function getProperty < T , K extends keyof T >(obj: T, key: K): T[K] {
    return obj[key]
 }
 const user = { id: 1, name: "John Doe", age: 21 };
//  console.log(getProperty(user, "name")) 

 // problem no-5:
 interface Book {
    title: string;
    author: string;
   publishedYear: number;
 }
  interface BookReadStatus extends Book {
    isRead: boolean;

  } 

function toggleReadStatus (book:Book): BookReadStatus {
    return {...book, isRead: true}
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook))


// problem no-6:
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person{
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
// console.log(student.getDetails())

// problem no-7:
 function getIntersection( array1: number[], array2: number[]): number[] {
    return array1.filter(value => array2.includes(value))
 }
//  console.log(getIntersection([1,2,3,4,5], [3,4,5,6]))