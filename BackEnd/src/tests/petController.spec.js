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
const { faker } = require('@faker-js/faker');

        describe('create', () => {
            test('em caso de sucesso, ao criar um novo pet a função deverá retornar o status 201', async () => {
                const img = path.resolve(__dirname, '../public/images/testimg.jpg')
                const response = await supertest(app)
                .post("/pet")
                .set('Content-type', 'multipart/form-data')
                .set('Authorization', 'Bearer ' + tokenUserWPets)
                .field('name_pet', faker.name.findName())
                .field('type', faker.animal.dog())
                .field('size', faker.random.word(2))
                .field('gender', 'femea')
                .field('city', 'Terra do Amanhã')
                .field('state', faker.random.locale())
                .field('comments', faker.random.words(20))
                .field('age', `${faker.random.numeric(1)}`)
                .attach("image_pet01", fs.readFileSync(path.resolve(__dirname, '../public/images/testimg.jpg')),'images/testimg.jpg')
                expect(response.status).toBe(201)
            })       
        
        }), 


describe('listAllPets:', () => {

    jest.setTimeout(30000)
    test('Ao listar os pets, em caso de sucesso a response deve ser 200', async () => {
        const response = await supertest(app)
        .get("/pet")
        expect(response.status).toBe(200)
    })
})

describe('deletePet:', () => {
    test('A tentativa de deletar um pet sem estar autenticado e ser o prop. usuario deve retornar 404', async () => {
        const response = await supertest(app)
        .put("/pet/delete/13")
        .set('Authorization', 'bearer ' + tokenUserWOPets)
        expect(response.status).toBe(404)
    }),
    
    test('Ao deletar um pet, estando autenticado no sistema o retorno deve ser 200', async () => {
        const pet = await PetService.activatePetForDeletionTest(13)
        const response = await supertest(app)
        .put("/pet/delete/13")
        .set('Authorization', 'bearer ' + tokenUserWPets)
        expect(response.status).toBe(200)
    })
    
})


describe('updatePet', () => {
    test('Ao atualizar um pet, em caso de sucesso, deve retornar o status 201', async () => {
        const response = await supertest(app)
        .put("/pet/13")
        .set('Content-type', 'multipart/form-data')
        .set('Authorization', 'Bearer ' + tokenUserWPets)
        .field('name_pet', faker.name.findName())
        expect(response.status).toBe(200)
    })       

})




