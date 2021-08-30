module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'userSessions',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      userId: {
        allowNull: false,
        references: {
          key: 'id',
          model: 'users',
        },
        type: DataTypes.UUID,
      },
      expiresAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updateAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deleteAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: 'utf8',
    },
  );
};

module.exports.down = (queryInterface) =>
  queryInterface.dropTable('userSessions');
