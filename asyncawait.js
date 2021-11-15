
let menu = ["top", "down"]
function order_food(order){
  let promise = new Promise((resolve, reject)=>{
if(menu.includes(order)){
  resolve()
}else{
  reject ("item not found")
}

  })
  return promise
}


function payment_m (payment){
  let promise = new Promise((resolve , reject)=>{
    if(payment > 20){
      resolve()
    }else{
      reject("hhhs")
    }
  })
  return promise
}

async function eat(order, payment){
  try{
    await order_food(order)
    console.log("order recieved by custo")
    console.log("collect pay")
    await payment_m(payment)
    console.log("done payment")
  }
  catch(error){
    console.log(error)

  }
  
}

eat("top", 30)



// (
//   async(order, payment)=>{
//     try{
//       // console.log(order);
//       await order_food(order)
//       console.log("order recieved by custo")
//       console.log("collect pay")
//       await payment_m(payment)
//       console.log("done payment")
//     }
//     catch(error){
//       console.log(error)
  
//     }
    
//   }
// )("top", 40);