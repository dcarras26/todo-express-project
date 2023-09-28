const Todo = require("../models/todo.model")

/**
 * It's an asynchronous function that uses the await keyword to wait for the result of the find()
 * method on the Todo model.
 *
 * The find() method returns a promise, which is why we can use the await keyword.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const getTodos = async (req, res) => {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  /**
 * It's an asynchronous function that uses the Todo model to find a Todo by its id, and then
 * sends a response with the Todo's data.
 * @param req - The request object.
 * @param res - The response object.
 */
const getTodoByTitle = async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.name);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  /**
 * It creates a new Todo using the data from the request body and returns the created Todo in the
 * response.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const createTodo = async (req, res) => {
    try {
      const todo = await Todo.create(req.body);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  /**
   * It takes the id of the Todo to be updated from the request params, and the updated Todo data
   * from the request body, and then updates the Todo in the database with the new data, and returns
   * the updated Todo to the client.
   * @param req - The request object.
   * @param res - The response object.
   */
  const updateTodo = async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.name, req.body, {
        new: true,
      });
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  /**
   * It finds a Todo by its id and deletes it.
   * @param req - The request object. This object represents the HTTP request and has properties for the
   * request query string, parameters, body, HTTP headers, and so on.
   * @param res - The response object.
   */
  const deleteTodo = async (req, res) => {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.name);
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  module.exports = {
    getTodos,
    getTodoByTitle,
    createTodo,
    updateTodo,
    deleteTodo
  }
  