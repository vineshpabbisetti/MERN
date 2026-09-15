//Basic Function

function greet() {
    console.log("Hello Vinesh");
}

greet();


//Function with Parameters
function greet(name) {
    console.log("Hello " + name);
}

greet("Raju");
greet("Srinu");

//Function Returning a Value
function add1(a, b) {
    return a + b;
}

const result = add1(10, 20);

console.log(result);


//Arrow function:

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));




// map function

const students = [
    { name: "Raju", marks: 85 },
    { name: "Srinu", marks: 90 },
    { name: "Kiran", marks: 75 }
];

students.map((student) => {
    console.log(student.name);
});


//filter function

const result1 = students.filter((student) => {
    return student.marks >= 80;
});

console.log(result1);


// find function

const student = students.find(student => student.name === "Raju");

console.log(student);


/// TASKS


const students1 = [
    { name: "Raju", marks: 85 },
    { name: "Srinu", marks: 92 },
    { name: "Kiran", marks: 65 },
    { name: "Vijay", marks: 78 },
    { name: "Suresh", marks: 95 }
];

/// TASK1

function calculateTotal(a, b) {
    console.log(a + b);
}

calculateTotal(20,20);


/// TASK2
const  AF = (a) => {
    return a * a;
}

const square = AF(10);

console.log(square);

/// TASK3
students1.map((stu)=>{
    console.log(stu.name);
})

/// TASK4
const result2 = students1.filter((stu)=>{
return stu.marks>=80;
});

console.log(result2);

/// TASK5
const student1=students1.find((stu)=>stu.name==="Kiran"
)
console.log(student1);
