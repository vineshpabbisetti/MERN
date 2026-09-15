const name = "Raju";
const age = 25;

// old way
console.log("My name is " + name + " and my age is " + age);

// new way
console.log(`My name is ${name} and my age is ${age}`);


/// Destructuring

//Object Destructuring

var student = {
    name: "Raju",
    age: 22,
    marks: 85
};

var {
    name: studentName,
    age: studentAge,
    marks: studentMarks
} = student;

console.log(studentName);
console.log(studentAge);
console.log(studentMarks);

//Array Destructuring

const students = ["Raju", "Srinu", "Kiran"];

const [first, second, third] = students;

console.log(first);
console.log(second);
console.log(third);


///Spread Operator

const numbers1 = [1, 2, 3];

const numbers2= [...numbers1,4,5,6];

console.log(numbers2);



// Spread with Objects

const student1={
    name:"vinesh",
    age:25
}

const student2={
    ...student1,
    marks:90
}
console.log(student2);

//Ternary Operator

const result = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(result);


//Optional Chaining

const student3 = {
    name: "Raju"
};

// console.log(student.name);

//console.log(student.address.city);

console.log(student3.address?.city);

//Nullish Coalescing ??

const name1 = null;

const displayName = name ?? "Guest";
console.log(displayName);




///// TASKs

/// Task-1  Template Literal

const name3 = "Vinesh";
const age3 = 25;
const course3 = "MERN";

console.log(`My name is ${name3}, I am ${age3} years old and I am learning ${course3}.`);


/// Task-2 Object Destructuring

const student4 = {
    name: "Raju",
    age: 22,
    marks: 85,
    course: "MCA"
};

var {
    name:stdname4,
    age:stdage4,
    marks:stdmarks4,
    course:stdcourse4
} = student4;

console.log(stdname4);
console.log(stdage4);
console.log(stdmarks4);
console.log(stdcourse4);


/// Task 3 — Array Destructuring

const subjects = ["JavaScript", "React", "Node"];

const [subject1, subject2, subject3] = subjects;

console.log(subject1);
console.log(subject2);
console.log(subject3);


///Task 4 — Spread Operator

const oldStudents = ["Raju", "Srinu"];

const newstudents =[...oldStudents, "Kiran", "Vijay"];

console.log(newstudents);


/// Task 5 — Object Spread

const student5 = {
    name: "Raju",
    age: 22
};

const updatedstudent={
    ...student5,
    marks:95
}

console.log(updatedstudent);

///Task 6 — Ternary Operator

let marks = 45;

const results = marks >= 40 ? "Pass" : "Fail";
console.log(results);

/// Task 7 — Optional Chaining

const student6 = {
    name: "Raju"
};

console.log(student6.address?.city);