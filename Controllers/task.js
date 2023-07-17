const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const { createcustomerror } = require("../errors/custom-errors");

const GetAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const GetTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createcustomerror("NO task found", 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createcustomerror("NO task found", 404));
  }
  res.status(200).json({ task });
});

const UpdateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createcustomerror("NO task found", 404));
  }
  res.status(200).json({ task });
});
module.exports = {
  GetAllTasks,
  createTask,
  GetTask,
  UpdateTask,
  deleteTask,
};
