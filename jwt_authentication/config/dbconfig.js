const Sequelize = require('sequelize')

const sequelize = new Sequelize('jwt_authenticate', 'postgres', 'root', {
    host:'localhost',
    dialect:'postgresql'
})

sequelize.authenticate().then(()=>{
    console.log("connected");
}).catch(Error=>{
    console.log("error", Error );
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize= sequelize;

db.jwt_authenticate= require('./models/userModel')(sequelize, Sequelize.DataTypes)

db.sequelize.sync().then(()=>{
    console.log("Yes Synced")
})

module.exports = Sequelize;