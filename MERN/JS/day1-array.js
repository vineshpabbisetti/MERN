const students = ["Raju", "Srinu", "Kiran", "Vijay"];

console.log("Students List:", students);
console.log("first student:", students[0]);
console.log("Last student:", students[students.length - 1]);
console.log("total number of students:", students.length);
students.push("Ramesh");
console.log("Updated Students List:", students);

for(let i=0; i<students.length; i++) {
    console.log("Student Name:", students[i]);
}