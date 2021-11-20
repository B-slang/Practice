const Sequelize = require('sequelize')

const sequelize = new Sequelize('cruddb', 'root', 'root', {
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("connected");
}).catch(Error=>{
    console.log("error", Error );
})
