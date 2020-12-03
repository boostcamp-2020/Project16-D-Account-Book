module.exports = (sequelize, DataTypes) => {
  const accountbook = sequelize.define(
    'accountbook',
    {
      title: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      gmt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDay: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: 'accountbook',
      underscored: true,
      paranoid: true,
    },
  );

  accountbook.associate = (models) => {
    accountbook.hasMany(models.incomeCategory, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });

    accountbook.hasMany(models.income, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });

    accountbook.hasMany(models.account, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });

    accountbook.hasMany(models.expenditure, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });

    accountbook.hasMany(models.expenditureCategory, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });

    accountbook.hasMany(models.userAccountbook, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });
  };

  return accountbook;
};
