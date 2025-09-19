//API fetching using the fetch() fucnction under async and await concept

//What is promises in JS
    /*
        ->promises are the special object that stores the eventualy completion of async operation.

        and we use .then() function to attach a call back function with the promise object which call it
        whenever the promise objec fill with the data.

        basically promise objet has three state :
            ->pendding - data not recived 
            ->fullfilled - data recived (result stored)
            ->rejected - rejected to give data or some error accours
    */


/*
Promises in JavaScript:

- A promise is an object representing the eventual completion (or failure) of an asynchronous operation.
- You can use `.then()`, `.catch()`, and `.finally()` to handle promise outcomes.

States of a promise:
1. Pending: Initial state, the promise is neither fulfilled nor rejected.
2. Fulfilled: The asynchronous operation completed successfully, and the result is available.
3. Rejected: The asynchronous operation failed, and an error occurred.


Methods to Handle Promises:

.then(): Attaches a callback function to handle the resolved value when the promise is fulfilled.
.catch(): Attaches a callback function to handle errors or rejections.
.finally(): Attaches a callback function to execute once the promise is settled (whether fulfilled or rejected).
Example:
*/

//Below is the creation of our own Promise
const promise = new Promise((resolve, reject) => {  
    const success = true; // Simulate success or failure
    setTimeout(() => {
      if (success) {
        resolve("Data received successfully!");
      } else {
        reject("Error occurred while fetching data.");
      }
    }, 1000);
  });
  
  // Handling the promise
  promise
    .then((result) => {
      console.log(result); // Logs: "Data received successfully!" if fulfilled
    })
    .catch((error) => {
      console.error(error); // Logs: "Error occurred while fetching data." if rejected
    })
    .finally(() => {
      console.log("Promise settled (fulfilled or rejected).");
    });
  

    //async and await keywords are need to handles the promises.
    //await is the keyword which is only used inside a async function.
    //we write the await in front of the promise and it resolve the promise.




    const myPromise = new promise((resolve,reject)=>{

        setTimeout(()=>{
             resolve("Promise resolve value");
            },1000);
       
    });


//Handling promise normaly

function getPromiseData(){

    myPromise.then((promiseData)=>{

        console.log(promiseData);
        console.log("namaste JS"); //first this will print and then 
        // promiseData will print after 10 second due to setTimeOut().
        

    });
}

//Handling promise using async and await

async function handlePromises() {

    const promiseData = await myPromise;
    console.log(promiseData);
    console.log("Namaste JavaScript"); 
    //here both the log() will print after 10 second because when we use the 
    //await keyword then JS Engine wait in line 97 for exectuion of promise object.
    
} 

handlePromises();