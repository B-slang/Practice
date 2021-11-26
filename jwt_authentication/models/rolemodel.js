// const { Sequelize } = require("sequelize/dist");

module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define("roles", {
    
    rid:{
        type: DataTypes.INTEGER,
        primarykey:true
    },

    name: {
      type: DataTypes.STRING,
    },
  });
  return role;
};
