module.exports = (sequelize, DataTypes) => {
  const account = sequelize.define(
    'account',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'account',
      underscored: true,
      paranoid: true,
    },
  );

  account.associate = (models) => {
    account.belongsTo(models.accountbook, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });
    account.hasMany(models.income, {
      foreignKey: {
        name: 'accountId',
        allowNull: false,
      },
    });
    account.hasMany(models.expenditure, {
      foreignKey: {
        name: 'accountId',
        allowNull: false,
      },
    });
  };
  return account;
};
