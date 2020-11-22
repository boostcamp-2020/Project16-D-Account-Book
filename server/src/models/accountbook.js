module.exports = (sequelize,DataTypes)=>{
  const accountbook = sequelize.define(
    'accountbook',{
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
      startDay:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
      },
    },
    {
      tableName:'accountbook',
      underscored:true,
      paranoid:true,
    }
  );

  accountbook.associate = (models) => {
    const foreignKey = 'accountbookId';

    accountbook.hasMany(models.userAccountbook,{
      foreignKey,
    });

    accountbook.hasMany(models.incomeCategory,{
      foreignKey,
    });

    accountbook.hasMany(models.income,{
      foreignKey,
    });

    accountbook.hasMany(models.account,{
      foreignKey,
    });

    accountbook.hasMany(models.expenditure,{
      foreignKey,
    });

    accountbook.hasMany(models.expenditureCategory,{
      foreignKey,
    });
  };

  return accountbook;
};
