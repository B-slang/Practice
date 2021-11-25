module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("user", {
      name: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
    });
  
    return Tutorial;
  };