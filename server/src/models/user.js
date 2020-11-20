module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    profileUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
      },
    },
    {
    tableName: 'user',
    underscored: true,
    },
  );

  comment.associate = (models) => {
    issue.belongsToMany(models.accountbook, {
      through: 'user_accountbook',
      as: 'accountbooks',
    });
  };

  return user;
  };
