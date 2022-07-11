const supertest = require('supertest');
const app = require('../../app');
const UserService = require("../domain/users/services/userService");
const tokenUserWOPets = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImNhcmxvc0Bob3RtYWlsLmNvbSIsIm5hbWVfdXNlciI6IkNhcmxvcyBBbGJlcnRvIiwiYWRkcmVzcyI6IlJ1YSBTZXRlIGRlIFNldGVtYnJvIDQwMSIsInBob25lIjpudWxsLCJpYXQiOjE2NTcyMjc3Mzd9.m_Dw2ftQbMIj50vV-8SP_eWCjhy1P-MXXKR5NMWqyDo"  //user_id: 1
const tokenUserWPets = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IkdhcmZpZWxkMjBAeWFob28uY29tIiwibmFtZV91c2VyIjoiRHIuIE5ldHRpZSBUdXJuZXIiLCJhZGRyZXNzIjoiV2l6YWJvcm91Z2giLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjU3MTMxMjQ4fQ.BiDBt_rqN5YSDwpyki22I8yeHbRErswmNUuhAse7Z1E"//user_id: 3
var FormData = require('form-data');
import { Blob } from 'buffer';
import PetService from '../domain/pets/services/petService';
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
        PetService.deActivatePetForEmptinessTest(1)
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

describe('updateUser', () => {
    test('Ao atualizar um usuário autenticado, em caso de sucesso o retorno deve ser 201', async () => {
        const token6thUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJlbWFpbCI6IldoaXRuZXkuV2Vpc3NuYXRAZ21haWwuY29tIiwibmFtZV91c2VyIjoiQ2xhdWRlIEhvZWdlciBJIiwiYWRkcmVzcyI6IkZvcnQgRGVzdGluZXkiLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjU3NDcyMzUzfQ.g_dT5fX58egx2_2a5qcixWLQYP2J_P8nlM9PHmPztKc"
        const response = await supertest(app)
        .put("/user/6")
        .set('Authorization', `Bearer ${token6thUser}`)
        .set('Content-type','multipart/form-data')
        .field('password', '123456')
        .field('name_user', 'Pedro')
        expect(response.status).toBe(201)
    })
})

describe('deleteUser:', () => {
    test('Ao tentar deletar a própria conta a response deve ser 200', async () => {
        const user = await UserService.activateUserForDeletionTest(3)
        const response = await supertest(app)
        .put("/user/delete/3")
        .set('Authorization', 'bearer ' + tokenUserWPets)
        expect(response.status).toBe(200)
    })

})


