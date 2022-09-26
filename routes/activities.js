const express = require("express");
const router = express.Router();
const db = require("../models/index");
const { putActivities } = require("../validator/activitiesValidator");

router.put("/:id", putActivities, async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await db.Activities.update(body, { where: { id } });
    res.json({msg: "Activity updated", data});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
