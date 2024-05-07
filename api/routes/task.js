import express from "express";
import { getTasks, addTasks, updateTask, deleteTask } from "../controllers/task.js";

const router = express.Router()

router.get("/", getTasks)
router.post("/", addTasks)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)

export default router