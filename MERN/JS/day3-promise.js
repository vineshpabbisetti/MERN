
// /// Your First Promise Practice

// const promise = new Promise((resolve, reject) => {

//     let marks = 30;

//     if (marks >= 40) {
//         resolve("Student Passed");
//     } else {
//         reject("Student Failed");
//     }

// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//     /// async / await

//     // async

//     async function greet() {
//     return "Hello Vinesh";
// }

// console.log(greet());




function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("HI");
        }, 3000);
    });
}

function getData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("HELLO");
        }, 2000);
    });
}

async function displayData() {

    console.log("Start");

    const result = await getData();

    console.log(result);
 
    
}



async function displayData1() {

    console.log("END");

    const result = await getData1();

    console.log(result);

    
}


displayData(); 
displayData1(); 


async function getUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    console.log(data);
}

getUsers();



