"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Testimonials", [
            {
                name: "Testimonio 1",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 2",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 2,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 3",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 4",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 2,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 5",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 6",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 7",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 8",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 2,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 9",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 10",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 11",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 12",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 2,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 13",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 2,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 14",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: "Testimonio 15",
                image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
                roleId: 3,
                content: "content testimonials test",
                createdAt: new Date,
                updatedAt: new Date
            },
        ], {});
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
