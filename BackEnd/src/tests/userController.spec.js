const supertest = require('supertest');
const app = require('../../app');
const UserService = require("../domain/users/services/userService");
const tokenUserWOPets = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImNhcmxvc0Bob3RtYWlsLmNvbSIsIm5hbWVfdXNlciI6IkNhcmxvcyBBbGJlcnRvIiwiYWRkcmVzcyI6IlJ1YSBTZXRlIGRlIFNldGVtYnJvIDQwMSIsInBob25lIjpudWxsLCJpYXQiOjE2NTcyMjc3Mzd9.m_Dw2ftQbMIj50vV-8SP_eWCjhy1P-MXXKR5NMWqyDo"  //user_id: 1
const tokenUserWPets = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IkdhcmZpZWxkMjBAeWFob28uY29tIiwibmFtZV91c2VyIjoiRHIuIE5ldHRpZSBUdXJuZXIiLCJhZGRyZXNzIjoiV2l6YWJvcm91Z2giLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjU3MTMxMjQ4fQ.BiDBt_rqN5YSDwpyki22I8yeHbRErswmNUuhAse7Z1E"//user_id: 3
var FormData = require('form-data');
import { Blob } from 'buffer';
const fs = require('fs')
const path = require('path');
const { faker } = require('@faker-js/faker')

describe('create', () => {
    test('em caso de sucesso, deve retornar o status 201', async () => {
        const response = await supertest(app)
        .post("/user")
        .set('Content-type', 'multipart/form-data')
        .field('name_user', faker.name.findName())
        .field('email', faker.internet.email())
        .field('address', faker.address.streetAddress())
        .field('mobile', faker.phone.number())
        .field('password', faker.random.alphaNumeric(6))
        .field('comments', faker.random.words(20))
        .field('whats', true)
        .attach('image_user', fs.readFileSync(path.resolve(__dirname, '../public/images/testimg.jpg')),'images/testimg.jpg')
        expect(response.status).toBe(201)
    })       

})

describe('listAllUsers:', () => {

    jest.setTimeout(30000)
    
    test('Ao tentar listar usuários sem auth a response deve ser 500', async () => {
        const response = await supertest(app)
        .get("/user")
        expect(response.status).toBe(500)
    }),

    test('Ao listar usuários com auth a response deve ser 200', async () => {
        const response = await supertest(app)
        .get("/user")
        .set('Authorization', 'bearer ' + tokenUserWOPets)
        expect(response.status).toBe(200)
    })
})

describe('listPetsByUser:', () => {
    test('Ao tentar listar pets por usuário sem ser o próprio usuário a response deve ser 500', async () => {
        const response = await supertest(app)
        .get("/user/2")
        .set('Authorization', 'bearer ' + tokenUserWOPets) // (user_id : 1 != 2)
        expect(response.status).toBe(401)
    }),

    test('Ao listar pets por usuário, se o usuário não existe a response deve ser 404', async () => {
        const response = await supertest(app)
        .get("/user/2130921830921")
        .set('Authorization', 'bearer ' + tokenUserWOPets)
        expect(response.status).toBe(404)
    }),

    test('Ao listar pets por usuário, se o usuário não contém pets a response deve ser 404', async () => {
        const response = await supertest(app)
        .get("/user/1")
        .set('Authorization', 'bearer ' + tokenUserWOPets)
        expect(response.status).toBe(404)
    }),

    test('Ao listar pets por usuário, se o usuário coincindir e existirem pets, a response deve ser 200', async () => {
        const response = await supertest(app)
        .get("/user/3") //usuário que contém pets
        .set('Authorization', 'bearer ' + tokenUserWPets)
        expect(response.status).toBe(200)
    })


}),

describe('deleteUser:', () => {
    test('Ao tentar deletar a própria conta a response deve ser 200', async () => {
        const user = await UserService.activateUserForDeletionTest(3)
        const response = await supertest(app)
        .put("/user/delete/3")
        .set('Authorization', 'bearer ' + tokenUserWPets)
        expect(response.status).toBe(200)
    })

})







// async listPetsByUser(req, res) {
//     try {
//         const {user_id} = req.params;
//         const userTokenId = req.auth.user_id
//         const userExists = await UserService.userExists(user_id)

//         if(user_id != userTokenId){
//             return res.status(401).json('Usuário informado não coincide com o usuário logado')
//         }

//         if (!userExists) {
//             return res.status(400).json('Usuário não encontrado');
//         }

//         const petsByUser = await PetService.findPetsByUser(user_id)
//         if(petsByUser=[]){
//             return res.status(404).json('Usuário não possui pets cadastrados atualmente')
//         }

//         return res.status(200).json(petsByUser);
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json('Erro ao listar os pets deste usuário');
        
//     };
// }

// async deleteUser(req, res) {
//     try {
//         const {user_id} = req.params;
//         const { email } = req.auth

//         const userHasPermission = await UserService.userHasPermission(user_id,email)

//         if (!userHasPermission) {
//             return res.status(404).json('Usuário não encontrado ou não possui permissão');
//         }
        
//         const findUser = await UserService.userExists(user_id)
//         if(!findUser.status){
//             return res.status(401).json('Usuário já desativado')
//         }

//         await User.update({
//             status:false
//         }, {
//             where: {
//                 user_id,
//             }
//         });

//         const updatedUser = await UserService.userExists(user_id)
//         return res.status(200).json(updatedUser);
//     } catch (error) {
//         return res.status(500).res.json('Erro ao deletar usuário')
        
//     }
// }