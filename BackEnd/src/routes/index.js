
const express = require('express')
const UserController = require('../controllers/userController')
const PetController = require('../controllers/petController')
const AuthController = require('../controllers/authController')

const userCreateValidation = require('../validations/user/create')
const userUpdateValidation = require('../validations/user/update')
const userDeleteValidation = require('../validations/user/update')
const petCreateValidation = require('../validations/pets/create')
const petUpdateValidation = require('../validations/pets/update')
const petDeleteValidation = require('../validations/pets/delete')
const authLoginValidation = require('../validations/auth/login')
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