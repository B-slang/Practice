const express = require('express')
const db = require('./models')
const app = express()
const port = 3005


app.use(express.json())



require('./routes/authroutes')(app);
require('./routes/userroutes')(app);

db.sequelize.sync().then(()=>{

    console.log("connected");
  }).catch(Error=>{
    console.log("error", Error );
  })




app.get('/', (req,res)=>{
    res.send ("LET'S CHECK JWT AUTHENTICATION ")
})




app.listen(port,()=>{
    console.log(`listening ${port}`)
})  


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}