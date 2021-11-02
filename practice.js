// promise excakple 



let promise = new Promise((resolve, reject)=>{
    let a = "Brijesh";
    let b = "Brijesh";

    if(a===b){
        resolve("matched")
        console.log("After matched")
    }else{
        reject("not resolved")
        console.log("After not relsoived")
    }
})
promise.then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})


//
console.log("Hello to the Promise tutorial");
let p = new Promise(function(resolve, reject) {
 console.log("Promise started");
 console.log("Promise is doing some important work...");
 console.log("Promise has completed, will resolve shortly");
 resolve("Promise resolved");
});

