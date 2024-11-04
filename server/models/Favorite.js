// models/Favorite.js
module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    Favorite.associate = (models) => {
        Favorite.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
        Favorite.belongsTo(models.Song, { foreignKey: 'songId', as: 'song' });
    };

    return Favorite;
};
