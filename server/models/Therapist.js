// models/Therapist.js
module.exports = (sequelize, DataTypes) => {
    const Therapist = sequelize.define('Therapist', {
      therapistId: {
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
      phoneNumber: {
        type: DataTypes.STRING,
        validate: {
          is: /^\d{10}$/i
        }
      },
      role: {
        type: DataTypes.ENUM('USER', 'THERAPIST'),
        allowNull: false
      },
      professionalDetails: DataTypes.STRING,
      areaOfSpecialization: DataTypes.STRING,
      yearsOfExperience: DataTypes.STRING
    });
  
    Therapist.associate = (models) => {
      Therapist.hasMany(models.Blog, { foreignKey: 'therapist_id' });
    };
  
    return Therapist;
  };
  