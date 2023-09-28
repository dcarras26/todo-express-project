const mongoose = require("mongoose")
const request = require("supertest")
const app = require("../app")

require("dotenv").config()

//Connect to DB before each test
beforeEach(async() => {
    await mongoose.connect(process.env.MONGODB_URI)
})

//Close connection after each test
afterEach(async() => {
    await mongoose.connection.close()
})

describe("POST /api/todos", () => {
    it("should create a todo", async () => {
        const res = await request(app).post("/api/todos").send({
            title: "Dishes",
            todo: "Wash the dishes",
        })
        expect(res.statusCode).toBe(201)
        expect(res.body.title).toBe("Dishes")
    })
})

describe("GET /api/todos", () => {
    it("should return all todos", async() => {
        const res = await request(app).get("/api/todos");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    })
})