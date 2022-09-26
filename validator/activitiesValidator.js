const { check } = require("express-validator");
const AppError = require('../utils/appError.util')



const id_activity = check("id")
  .notEmpty()
  .withMessage("id is required")
  .isInt()
  .withMessage("id must be a number")
  .custom(
    async (id = '') => {
        const activity = await db.Activities.findOne({ where: { id } });
        console.log(activity)
        if (!activity) {
            throw new AppError('Activity not found', 404);
        }
    }
  )

const putActivities = [
    id_activity
];


module.exports = {
    putActivities
}