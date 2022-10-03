"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("Organization", "urlFacebook", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Organization", "urlLinkedIn", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Organization", "urlInstagram", {
        type: Sequelize.STRING
      })
    ]);
  },
};