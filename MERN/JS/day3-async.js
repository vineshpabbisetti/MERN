//// task 1

/// Create a function and Then create an async function and use await.

function getStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Student data received");
        }, 2000);

    });

}

const student = async () => {

    console.log("Start");   
    const res=await getStudent();
    console.log(res);
    console.log("End");
}

student();


///// Task 2 — Error Handling
/// Create a Promise that rejects:

const promise = new Promise(( reject) => {
    reject("Database connection failed");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    