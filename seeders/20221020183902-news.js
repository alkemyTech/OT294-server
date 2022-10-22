"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("News", [
          {
            "name": "Novedad 9",
            "content": "contenido novedad 9",
            "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
            "categoryId": 2,
            "deletedAt": null,
            "createdAt": new Date,
            "updatedAt": new Date
        },
        {
          "name": "Novedad 10",
          "content": "contenido novedad 10",
          "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          "categoryId": 2,
          "deletedAt": null,
          "createdAt": new Date,
          "updatedAt": new Date
        },
        {
          "name": "Novedad 11",
          "content": "contenido novedad 11",
          "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          "categoryId": 2,
          "deletedAt": null,
          "createdAt": new Date,
          "updatedAt": new Date
        },
        {
          "name": "Novedad 12",
          "content": "contenido novedad 12",
          "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          "categoryId": 2,
          "deletedAt": null,
          "createdAt": new Date,
          "updatedAt": new Date
        },
        {
          "name": "Novedad 13",
          "content": "contenido novedad 13",
          "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          "categoryId": 2,
          "deletedAt": null,
          "createdAt": new Date,
          "updatedAt": new Date
        },
        {
          "name": "Novedad 13",
          "content": "contenido novedad 13",
          "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          "categoryId": 1,
          "deletedAt": null,
          "createdAt": new Date,
          "updatedAt": new Date
        },
        {
          "name": "Novedad 14",
          "content": "contenido novedad 14",
          "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          "categoryId": 1,
          "deletedAt": null,
          "createdAt": new Date,
          "updatedAt": new Date
        },
        {
          "name": "Novedad 15",
          "content": "contenido novedad 15",
          "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          "categoryId": 3,
          "deletedAt": null,
          "createdAt": new Date,
          "updatedAt": new Date
        },
        {
          "name": "Novedad 16",
          "content": "contenido novedad 16",
          "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          "categoryId": 3,
          "deletedAt": null,
          "createdAt": new Date,
          "updatedAt": new Date
        },
        {
          "name": "Novedad 17",
          "content": "contenido novedad 17",
          "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
          "categoryId": 3,
          "deletedAt": null,
          "createdAt": new Date,
          "updatedAt": new Date
        }], {});
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

