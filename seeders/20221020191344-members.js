"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Members", [
      {
      name: "Member 1",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 2",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 3",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 4",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 5",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 6",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 7",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 8",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 9",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 10",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 11",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 12",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 13",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 14",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: "Member 15",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      linkedinUrl: "https://linkedin.com",
      image: "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      description: "description test",
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {})
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