'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Activities", [{
            name: "Desayuno de La Cava",
            image: "https://files.globalgiving.org/pfil/5067/ph_5067_93073.jpg?m=1479658881000",
            content: "Se brinda la primera alimentación del día a los beneficiarios de la ONG",
            deletedAt: null,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: "Cena navidad",
            image: "https://i2-prod.birminghammail.co.uk/incoming/article17409112.ece/ALTERNATES/s615b/0_Homeless-Christmas-Dinner-Meal-Network-Rail-Midlands-Langar-Seva.jpg",
            content: "En una fecha tan especial les brindamos una cena especial y un rato de esparcimiento y diversión",
            deletedAt: null,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: "Deportes para los más chicos",
            image: "https://raisingchildren.net.au/__data/assets/image/0028/48727/activities-for-school-kids-2narrow.jpg",
            content: "Una vida llena de deportes es una vida sana y con propósito, por eso fomentamos y apoyamos esta actividad en los más chicos",
            deletedAt: null,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: "Primera infancia",
            image: "https://www.importancia.org/wp-content/uploads/primera-infancia.jpg",
            content: "LA inversión social con mejor retorno es en aquellos individuos entre 0 y 5 años",
            deletedAt: null,
            createdAt: new Date,
            updatedAt: new Date
        },
        {
            name: "Trabajo social",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flickr_-_Official_U.S._Navy_Imagery_-_Pacific_Partnership_2012_visits_Vietnam._%281%29.jpg",
            content: "Enseñando a compartir y a generar herramientas y habilidades para la adquisición de nuevos conocimientos",
            deletedAt: null,
            createdAt: new Date,
            updatedAt: new Date
        }], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
