const supertest = require('supertest');
const app = require('../../app');
const UserService = require("../domain/users/services/userService");
const tokenUserWOPets = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImNhcmxvc0Bob3RtYWlsLmNvbSIsIm5hbWVfdXNlciI6IkNhcmxvcyBBbGJlcnRvIiwiYWRkcmVzcyI6IlJ1YSBTZXRlIGRlIFNldGVtYnJvIDQwMSIsInBob25lIjpudWxsLCJpYXQiOjE2NTcyMjc3Mzd9.m_Dw2ftQbMIj50vV-8SP_eWCjhy1P-MXXKR5NMWqyDo"  //user_id: 1
const tokenUserWPets = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IkdhcmZpZWxkMjBAeWFob28uY29tIiwibmFtZV91c2VyIjoiRHIuIE5ldHRpZSBUdXJuZXIiLCJhZGRyZXNzIjoiV2l6YWJvcm91Z2giLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjU3MTMxMjQ4fQ.BiDBt_rqN5YSDwpyki22I8yeHbRErswmNUuhAse7Z1E"//user_id: 3
var FormData = require('form-data');
import { Blob } from 'buffer';
const fs = require('fs')
const path = require('path');

// describe('create', () => {
//     test('em caso de sucesso, deve retornar o status 201', async () => {

//         const img = fs.readFileSync(path.join(__dirname, '../public/images/testimg.jpg'))
//         const fbParts = [
//             new Blob([img], {
//               type: 'image/jpg'
//             }),
//             ' Same way as you do with blob',
//             new Uint16Array([999999999999999])
//           ]
          
//           var fbImg = new File(fbParts, 'sample.jpg', {
//             lastModified: new Date(2022, 6, 7),
//             type: 'image/jpg'
//           })
        
//         var formData = new FormData();
        
        
//         formData.append('name_user', faker.name.findName())
//         formData.append('email', faker.internet.email())
//         formData.append('adress', faker.address.streetAddress())
//         formData.append('phone', faker.phone.number())
//         formData.append('password', faker.random.alphaNumeric(6))
//         formData.append('comments', faker.random.words(20))
//         formData.append('image', fbImg, 'sample.jpg')
       
//         const response = await supertest(app)
//         .post("/user")
//         .set('Content-type', 'multipart/form-data')
//         .send(formData)
//         expect(response.status).toBe(201)
//     })       

// })

describe('listAllPets:', () => {

    jest.setTimeout(30000)
    test('Ao listar os pets a response deve ser 200', async () => {
        const response = await supertest(app)
        .get("/pet")
        expect(response.status).toBe(200)
    })
})

describe('deletePet:', () => {
    test('A tentativa de deletar um pet sem estar autenticado e ser o prop. usuario deve retornar', async () => {
        const response = await supertest(app)
        .put("/pet/delete/3")
        .set('Authorization', 'bearer ' + tokenUserWOPets)
        expect(response.status).toBe(404)
    })
    
    // const user = await UserService.activateUserForDeletionTest(3)
})


//++updatePet




