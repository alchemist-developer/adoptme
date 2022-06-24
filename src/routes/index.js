
const express = require('express')
const UserController = require('../controllers/userController')
const PostController = require('../controllers/postController')
const AuthController = require('../controllers/authController')

const userCreateValidation = require('../validations/users/create')
const authLoginValidation = require('../validations/auth/login')
const auth = require('../middlewares/auth')
const routes = express.Router()


routes.post("/user", userCreateValidation, UserController.create)
routes.post("/login", authLoginValidation, AuthController.login)
routes.get("/user", auth, UserController.listAllUsers)
routes.get("/user/:username/posts", auth, UserController.listPostsByUsername)
routes.put("/user/:id", auth, UserController.updateUser)
routes.delete("/user/:id", auth, UserController.deleteUser)



routes.post("/post", auth, PostController.create)
routes.get("/post", auth, PostController.listAllPosts)
routes.put("/post/:id", auth, PostController.updatePost)
routes.delete("/post/:id", auth, PostController.deletePost)



module.exports = routes