const supertest = require('supertest');
const app = require('../../app-test');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0ZUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRlc3RlIiwibmFtZSI6IlRlc3RlIiwiYXZhdGFyIjoiMSIsImFwYXJ0bWVudCI6MjIwLCJpYXQiOjE2NTU0MDkwNzR9.kBwLpnLXYdpJ0WO4hWnlQYQH8jO_wwc_aftyyOSKKAg'

function makeRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

describe('No controller, ao executar função', () => {

    describe('create', () => {
        beforeAll(() => {
            // mongoDB.connect();
        });
        

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
                .post('/user')
                .send({
                    name: makeRandomString(10),
                    username: makeRandomString(10),
                    avatar: '2',
                    email: `${makeRandomString(10)}@mail.com`,
                    password: '123456',
                    apartment: 200,
                    admin: false
                })

                /*console.log(JSON.stringify({
                    name: makeRandomString(10),
                    username: makeRandomString(10),
                    avatar: '2',
                    email: `${makeRandomString(10)}@mail.com`,
                    password: '123456',
                    apartment: 200,
                    admin: false
                }));*/

            return expect(response.status).toBe(201)
        })

        test('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
                .post('/user')
                .send({
                    name: makeRandomString(10),
                    username: makeRandomString(10),
                    avatar: '2',
                    email: `${makeRandomString(10)}@mail.com`,
                    password: '123456',
                    apartment: 200,
                    admin: false
                })


            return expect(response.body).toEqual(
                expect.objectContaining({
                    createdAt: expect.any(String),
                    user_id: expect.any(Number),
                    name: expect.any(String),
                    username: expect.any(String),
                    email: expect.any(String),
                    password: expect.any(String),
                    apartment: expect.any(Number),
                    admin: expect.any(Boolean),
                    updatedAt: expect.any(String),
                })
            )



        })


    })
})