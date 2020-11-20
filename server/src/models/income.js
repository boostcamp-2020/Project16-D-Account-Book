module.exports = (sequelize, DataTypes) => {
  const income = sequelize.define(
    'income',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      memo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'income',
      underscored: true,
      paranoid: true,
    },
  );

  income.associate = (models) => {
    income.belongsTo(models.incomeCategory, {
      foreignKey: {
        name: 'incomeCategoryId',
        allowNull: false,
      },
    });
    income.belongsTo(models.accountbook, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });
    income.belongsTo(models.account, {
      foreignKey: {
        name: 'accountId',
        allowNull: false,
      },
    });
  };
  return income;
};
