const db = require('../models')

module.exports = (sequelize,DataTypes) => {
  const Posts  = sequelize.define("Posts",{
    Postname:DataTypes.STRING,
    title:DataTypes.STRING,
    content:DataTypes.STRING, 
    user_id:DataTypes.INTEGER
  })
  Posts.associate=(db)=>{
    Posts.belongsTo(db.users, {foreignKey:'user_id',as : 'userinfo'})
  }
  return Posts
  
  }