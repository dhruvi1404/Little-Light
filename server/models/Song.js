// models/Song.js
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        songPath: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagePath: DataTypes.STRING
    });

    Song.associate = (models) => {
        Song.belongsTo(models.Artist, { foreignKey: 'artistId', as: 'artist' });
        Song.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
    };

    return Song;
};
