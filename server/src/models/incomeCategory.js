module.exports = (sequelize, DataTypes) => {
  const incomeCategory = sequelize.define(
    'income_category',
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
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: 'income_category',
      underscored: true,
    },
  );

  incomeCategory.associate = (models) => {
    incomeCategory.belongsTo(models.accountbook, { foreignKey: 'accountbookId' });
    incomeCategory.hasMany(models.income, { as: 'incomes' });
  };

  return incomeCategory;
};
