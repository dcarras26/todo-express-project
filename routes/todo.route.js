const express = require("express")

const {
    getTodos,
    getTodoByTitle,
    createTodo,
    updateTodo,
    deleteTodo,
} = require("../controllers/todo.controller")

const router = express.Router()

router.get("/todos", getTodos)
router.get("todos/:title", getTodoByTitle)
router.post("/todos", createTodo)
router.patch("/todos/:title", updateTodo)
router.delete("/todos/:title", deleteTodo)

module.exports = router