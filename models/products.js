module.exports = function(sequelize, DataTypes) {
    var products = sequelize.define("product", {
      handle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      tags: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0.00
      }
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    }
    );
    return products;
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  