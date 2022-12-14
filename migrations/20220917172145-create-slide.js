"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Slides", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.STRING,
      },
      order: {
        type: Sequelize.INTEGER,
      },
      organizationId: {
        type: Sequelize.INTEGER,
        /* references: {
          model: "Organizations",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL", */
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Slides");
  },
};
