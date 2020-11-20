module.exports = (sequelize,DataTypes)=>{
  const userAccountbook= sequelize.define(
    'userAccountbook',{
      authority:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
      },
    },{
      tableName:'userAccountbook',
      underscored:true,
      paranoid:true,
    }
  );

  userAccountbook.associate = (models)=>{
    userAccountbook.belongsTo(models.user,{
      foreignKey:'accountbookId',
    });
    userAccountbook.belongsTo(models.accountbook,{
      foreignKey:'userId',
    });
  }

  return userAccountbook;
};