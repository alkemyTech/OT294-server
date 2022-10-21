"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Members", [{
      name: "Usuario",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete("People", null, {});
     */
  }
};
