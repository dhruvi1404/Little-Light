// models/Artist.js
module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('Artist', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Artist.associate = (models) => {
        Artist.hasMany(models.Song, { foreignKey: 'artistId', as: 'songs' });
    };

    return Artist;
};
