module.exports = function(sequelize, DataTypes) {
    const checkout = sequelize.define("checkout", {
     
      products_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    }
    );
    return checkout;
  };


  // send a request to backend from frontend. 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  