module.exports = (sequelize, DataTypes) => {
  const incomeCategory = sequelize.define(
    'incomeCategory',
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
      tableName: 'income_category',
      underscored: true,
      paranoid: true,
    },
  );

  incomeCategory.associate = (models) => {
    incomeCategory.belongsTo(models.accountbook, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });
    incomeCategory.hasMany(models.income, {
      foreignKey: {
        name: 'incomeCategoryId',
        allowNull: false,
      },
    });
  };

  return incomeCategory;
};
