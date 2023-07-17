const express = require("express");
const router = express.Router();
const {
  GetAllTasks,
  createTask,
  GetTask,
  UpdateTask,
  deleteTask,
} = require("../Controllers/task");

router.route("/").get(GetAllTasks);
router.route("/").post(createTask);
router.route("/:id").get(GetTask).patch(UpdateTask).delete(deleteTask);

module.exports = router;
