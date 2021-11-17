const path = require('path');
const os = require('os');

//path module
let file = path.parse(__filename)
let file2 = path.parse(__dirname)


console.log(file, file2);


//OS module

let totalmemory =  os.totalmem()
let freememory = os.freemem() 


console.log("Total Memory" +""+ totalmemory, "free Memory"+""+freememory);
