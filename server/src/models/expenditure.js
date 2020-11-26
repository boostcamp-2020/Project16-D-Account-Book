module.exports = (sequelize, DataTypes) => {
  const expenditure = sequelize.define(
    'expenditure',
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
      place: {
        type: DataTypes.STRING,
        allowNull: false,
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
      tableName: 'expenditure',
      underscored: true,
      paranoid: true,
    },
  );

  expenditure.associate = (models) => {
    expenditure.belongsTo(models.expenditureCategory, {
      foreignKey: {
        name: 'expenditureCategoryId',
        allowNull: false,
      },
    });
    expenditure.belongsTo(models.accountbook, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });
    expenditure.belongsTo(models.account, {
      foreignKey: {
        name: 'accountId',
        allowNull: false,
      },
    });
  };
  return expenditure;
};
