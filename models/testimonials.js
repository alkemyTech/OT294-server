"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Testimonials extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association
        }
    }
    Testimonials.init({
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        roleId: DataTypes.INTEGER,
        deleteAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: "Testimonials",
    });
    return Testimonials;
};