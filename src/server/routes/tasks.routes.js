import { Router } from "express";
import {
  /*getTasks,
 getTask,
  createTask,
  deleteTask,
  updateTask */
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get('/ping', async (req, res) => {
  const [rows ] = await pool.query('SELECT 1 + 1 as result');
  console.log(rows);
  res.json(rows);
});

/* router.get("/tasks", getTasks); */

/* router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask); */

export default router;