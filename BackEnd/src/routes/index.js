
const express = require('express')
const UserController = require('../controllers/userController')
const PetController = require('../controllers/petController')
const AuthController = require('../controllers/authController')

const userCreateValidation = require('../validations/user/create')
const authLoginValidation = require('../validations/auth/login')
const auth = require('../middlewares/auth')
const routes = express.Router()


routes.post("/user", userCreateValidation, UserController.create)
routes.post("/login", authLoginValidation, AuthController.login)
routes.get("/user", auth, UserController.listAllUsers)
routes.get("/user/:user_id/pets", auth, UserController.listPetsByUser)
routes.put("/user/:user_id", auth, UserController.updateUser)
routes.delete("/user/:user_id", auth, UserController.deleteUser)



routes.post("/pet", auth, PetController.create)
routes.get("/pet", auth, PetController.listAllPets)
routes.put("/pet/:pet_id", auth, PetController.updatePet)
routes.delete("/pet/:pet_id", auth, PetController.deletePet)



module.exports = routes