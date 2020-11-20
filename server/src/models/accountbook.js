module.exports = (sequelize,DataTypes)=>{
  const accountBook = sequelize.define(
    'accountbook'
    ,{
      title:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      description:{
        type:DataTypes.STRING,
        allowNull:true,
      },
      gmt:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      color:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      start_day:{
        type:DataTypes.BOOLEAN,
        allowNull:false
      }
    },{
      tableName:'ACCOUNTBOOK',
      underscored:true,
      paranoid:true,
    }
  );

  accountBook.associate = (models)=>{
    const foreignKey : 'accountbook_id';

    accountBook.hasMany(models.userAccountbook,{
      foreignKey
    });

    accountBook.hasMany(models.incomeCategory,{
      foreignKey,
    });

    accountBook.hasMany(models.income,{
      foreignKey
    });

    accountBook.hasMany(models.account,{
      foreignKey
    });

    accountBook.hasMany(models.expenditure,{
      foreignKey
    });

    accountBook.hasMany(models.expenditureCategory,{
      foreignKey
    });
  }

  return accountBook;
};