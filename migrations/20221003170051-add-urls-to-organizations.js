"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("Organization", "urlFacebook", {
        allowNull: true,
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Organization", "urlLinkedIn", {
        allowNull: true,
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Organization", "urlInstagram", {
        allowNull: true,
        type: Sequelize.STRING
      })
    ]);
  },
};