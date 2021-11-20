module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('products',{
      categoryId: DataTypes.INTEGER,
      productName: DataTypes.STRING,
      productPrice: DataTypes.STRING,
      description: DataTypes.STRING,
      productImage: DataTypes.TEXT,
      stock: DataTypes.INTEGER
  
    },)
    
    return Products;
  };