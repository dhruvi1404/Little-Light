// models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        validate: {
          is: /^[a-zA-Z]*$/i
        }
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          is: /^[a-zA-Z]*$/i
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM('USER', 'THERAPIST'),
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        validate: {
          is: /^\d{10}$/i
        }
      },
      resetPasswordToken: {
        type: DataTypes.STRING,
        unique: true
      }
    });
  
    User.associate = (models) => {
      User.hasMany(models.Journal, { foreignKey: 'user_id' });
    };
  
    return User;
  };
  