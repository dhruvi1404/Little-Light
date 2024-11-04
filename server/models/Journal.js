// models/Journal.js
module.exports = (sequelize, DataTypes) => {
    const Journal = sequelize.define('Journal', {
        journalId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        journalTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        journalDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        journalDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Journal.associate = (models) => {
        Journal.belongsTo(models.User, { foreignKey: 'user_id' });
    };

    return Journal;
};
