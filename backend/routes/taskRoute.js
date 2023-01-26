const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllData,
  getOneData,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.route("/").get(getAllData).post(createTask);
router.route("/:id").get(getOneData).delete(deleteTask).put(updateTask);

// Create a Task
// router.post("/", createTask);
// Get/Read DATA
// router.get("/", getTasks);
// Get One Data
// router.get("/:id", getOneData);
// Delete Task
// router.delete("/:id", deleteTask);
// Update Task
// router.put("/:id", updateTask);

module.exports = router;
