"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("Organizations", "urlFacebook", {
        allowNull: true,
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Organizations", "urlLinkedIn", {
        allowNull: true,
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Organizations", "urlInstagram", {
        allowNull: true,
        type: Sequelize.STRING
      })
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Organizations", "urlFacebook");
    await queryInterface.removeColumn("Organizations", "urlLinkedIn");
    await queryInterface.removeColumn("Organizations", "urlInstagram");
  }
};