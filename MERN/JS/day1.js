/// PART 1: Variables and Data Types
const studentName = "vinesh";
const age = 22;
const marks = 85;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Marks:", marks);

if (marks >= 90) {
    console.log("A Grade");
}
else if (marks >= 75 && marks <=89) {
    console.log("B Grade");
}
else if (marks >= 60 && marks <=74) {
    console.log("C Grade");
}
else if (marks >= 40 && marks <=59) {
    console.log("D Grade");
}
else {
    console.log("Fail");
}
