module.exports = (sequelize, DataTypes) => {
  const expenditureCategory = sequelize.define(
    'expenditureCategory',
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
      tableName: 'expenditure_category',
      underscored: true,
      paranoid: true,
    },
  );

  expenditureCategory.associate = (models) => {
    expenditureCategory.hasMany(models.expenditure, {
      foreignKey: {
        name: 'expenditureCategoryId',
        allowNull: false,
      },
    });
    expenditureCategory.belongsTo(models.accountbook, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });
  };
  return expenditureCategory;
};
