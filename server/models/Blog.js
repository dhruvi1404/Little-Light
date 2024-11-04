// models/Blog.js
module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      image: DataTypes.STRING,
      createdDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  
    Blog.associate = (models) => {
      Blog.belongsTo(models.Therapist, { foreignKey: 'therapist_id' });
    };
  
    return Blog;
  };
  