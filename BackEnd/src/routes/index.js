
const express = require('express')
const UserController = require('../domain/users/controllers/userController')
const PetController = require('../domain/pets/controllers/petController')
const AuthController = require('../domain/users/controllers/authController')

const userCreateValidation = require('../domain/users/validations/create')
const userUpdateValidation = require('../domain/users/validations/update')
const userDeleteValidation = require('../domain/users/validations/delete')
const petCreateValidation = require('../domain/pets/validations/create')
const petUpdateValidation = require('../domain/pets/validations/update')
const petDeleteValidation = require('../domain/pets/validations/delete')
const authLoginValidation = require('../domain/users/validations/login')
const auth = require('../middlewares/auth')
const routes = express.Router()


routes.post("/user", userCreateValidation, UserController.create)
routes.get("/user", auth, UserController.listAllUsers)
routes.get("/user/:user_id", auth, UserController.listPetsByUser)
routes.put("/user/:user_id", auth, userUpdateValidation, UserController.updateUser)
routes.put("/user/delete/:user_id", auth, userDeleteValidation, UserController.deleteUser)


routes.post("/login", authLoginValidation, AuthController.login)

routes.post("/pet", auth,petCreateValidation, PetController.create)
routes.get("/pet", auth, PetController.listAllPets)
routes.put("/pet/:pet_id", auth, petUpdateValidation, PetController.updatePet)
routes.put("/pet/delete/:pet_id", auth, petDeleteValidation, PetController.deletePet)



module.exports = routes