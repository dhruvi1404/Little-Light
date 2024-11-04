// models/Category.js
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        imagePath: DataTypes.STRING
    });

    Category.associate = (models) => {
        Category.hasMany(models.Song, { foreignKey: 'categoryId', as: 'songs' });
    };

    return Category;
};
