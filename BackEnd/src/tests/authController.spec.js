const supertest = require("supertest")
const app = require("../../app")
const jwt = require("jsonwebtoken")
require("dotenv").config()


describe('No authController, ao executar a função login', () =>{

    test('em caso de sucesso, deve retornar o status 200', async () => {
        const response = await supertest(app)
            .post("/login")
            .send({
                email: "adoptmedevteam@am.com",
                password: "adminadmin"
            })
        expect(response.status).toBe(200)
    })

    test('em caso de sucesso, deve retornar o token criado', async () => {
        const response = await supertest(app)
            .post("/login")
            .send({
                email: "adoptmedevteam@am.com",
                password: "adminadmin"
            })

        expect(response.body).toMatchObject(

            {
                "token": `${response.body.token}`,
                "user": {
                    "user_id": 52,
                    "name_user": "Pedro Utz",
                    "email": "adoptmedevteam@am.com",
                    "address": "Rua da Solidão",
                    "mobile": "51 923829387",
                    "whats": true,
                    "phone": "51 9 9999999",
                    "password": "$2b$06$uwVIdLVZGBWfcvwTdltv1uKIxT0.zuENrFomLq56OIsyM71.KTGsG",
                    "comments": "To por encontrar o meu pet ideal",
                    "status": true,
                    "image_user": "v1657510284/adoptme/users/vzmofyobzul6ir3hxx4h.jpg",
                    "createdAt": "2022-07-11T03:31:25.000Z",
                    "updatedAt": "2022-07-11T03:31:25.000Z"
                }
            })
    })


})


//Testes unitários