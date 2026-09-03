const students = [
    {
        name: "Raju",
        age: 22,
        marks: 60
    },
    {
        name: "Srinu",
        age: 23,
        marks: 90
    },
    {
        name: "Kiran",
        age: 21,
        marks: 75
    }
];

console.log("complete students array:", students);

console.log("first student's name:", students[0].name);

console.log("third student's marks:", students[2].marks);

students[0].city="Eluru";
console.log("Updated first student:", students[0]);

for(let i=0; i<students.length; i++) {
    console.log("Student Name:", students[i].name);
}

for (let i=0; i<students.length; i++) {
    if(students[i].marks>=80) {
        console.log(`${students[i].name}-${students[i].marks}`);
    }
}