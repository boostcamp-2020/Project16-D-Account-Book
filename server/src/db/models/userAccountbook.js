module.exports = (sequelize, DataTypes) => {
  const userAccountbook = sequelize.define(
    'userAccountbook',
    {
      authority: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'user_accountbook',
      underscored: true,
      paranoid: true,
    },
  );

  userAccountbook.associate = (models) => {
    userAccountbook.belongsTo(models.user, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
        as: 'user',
      },
    });
    userAccountbook.belongsTo(models.accountbook, {
      foreignKey: {
        name: 'accountbookId',
        allowNull: false,
      },
    });
  };

  return userAccountbook;
};
