

const express = require('express')
const { DataTypes } = require('sequelize/dist')
const { sequelize } = require('./models')
const {createUser, getOneToOne} = require('./controllers/usercontroller')

const db = require('./models')
const { createPost,getPostOneToOne } = require('./controllers/postcontroller')

const app = express()

app.use(express.json())

// onetoone
// db.users = require('./models/users')(sequelize,DataTypes)
// db.posts = require('./models/posts')(sequelize,DataTypes)

// db.users.hasOne(db.posts)
// db.posts.belongsTo(db.users)















app.get('/', (req,res)=>{
    res.send("home")
    console.log("home");
})

// routes
app.post('/onetoone',createUser )
app.get('/onetoone', getOneToOne)


//post routes one to one
app.post('/posts', createPost)
app.get('/getpost', getPostOneToOne)



// db connt

db.sequelize.sync().then(()=>{
    console.log("connected");
}).catch(error=>{
    console.log(error);
})



app.listen(5000,() => {
    console.log("App started on Port 5000")
})
