"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.changeColumn("Users", "deletedAt", {
                allowNull: true,
                type: Sequelize.DATE
            })
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.changeColumn("Users", "deletedAt", {
                allowNull: false,
                type: Sequelize.DATE
            })
        ]);
    }
};