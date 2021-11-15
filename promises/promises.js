const axios = require("axios");
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 3;
// }).then((result)=>{
//     console.log(result)
//     return result *4
// })

function fetchUserNames() {
  //   new Promise((resolve, reject)=>{

  //   })
  const result = axios.get("https://api.github.com/users?per_page=5");
  //
  result.then((data) => {
    data.data.map(({ login }) => console.log(login));
  });
}
fetchUserNames();

