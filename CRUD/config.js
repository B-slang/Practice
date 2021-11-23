const Sequelize = require('sequelize')

const sequelize = new Sequelize('cruddb', 'postgres', 'root', {
    host:'localhost',
    dialect:'postgresql'
})

sequelize.authenticate().then(()=>{
    console.log("connected");
}).catch(Error=>{
    console.log("error", Error );
})
