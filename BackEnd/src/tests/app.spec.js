const supertest = require('supertest');
const app = require('./app-test');
/*const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0ZUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRlc3RlIiwibmFtZSI6IlRlc3RlIiwiYXZhdGFyIjoiMSIsImFwYXJ0bWVudCI6MjIwLCJpYXQiOjE2NTU0MDkwNzR9.kBwLpnLXYdpJ0WO4hWnlQYQH8jO_wwc_aftyyOSKKAg'*/

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

const usuarioValido = {
    name: makeRandomString(10),
    username: makeRandomString(10),
    avatar: '2',
    email: `${makeRandomString(10)}@mail.com`,
    password: '123456',
    apartment: 200,
    admin: false
}

var token;
var usuarioCadastrado;
var postCadastrado;


describe('Teste de Integração (Endpoints)', () => {
    

    describe('create', () => {
        beforeAll(() => {
            // mongoDB.connect();
        });
        

        test('Em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
                .post('/user')
                .send(usuarioValido)

                usuarioCadastrado = response.body 

            return expect(response.status).toBe(201)
        })

        test('Em caso de erro, deve retornar 400', async () => {
            const response = await supertest(app)
                .post('/user')
                .send({
                    name: makeRandomString(20),
                    username: makeRandomString(20),
                    avatar: '2',
                    email: `${makeRandomString(15)}@mail`,
                    password: '12345678910',
                    apartment: 200,
                    admin: true
                })

            return expect(response.status).toBe(400)
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

    describe('login', () => {        

        test('Em caso de sucesso, deve retornar 200', async () => {
            const response = await supertest(app)
                .post('/login')
                .send({
                    email: usuarioValido.email,
                    password: usuarioValido.password                   
                })

                token = response.body.token

            return expect(response.status).toBe(200)
        })

        test('Em caso de erro, deve retornar 400', async () => {
            const response = await supertest(app)
                .post('/login')
                .send({
                    email: `${makeRandomString(15)}@mail`,
                    password: '12345678910',
                })

            return expect(response.status).toBe(400)
        })        
    })

    describe('Post', () => {        

        test('Em caso de sucesso, deve retornar 200', async () => {
            const response = await supertest(app)
                .post('/post')
                .set('Authorization', `Bearer ${token}`)    
                .send({
                    content: `${makeRandomString(300)}`                   
                })

                postCadastrado = response.body

            return expect(response.status).toBe(200)
        })

        /*test('Em caso de erro, deve retornar 400', async () => {
            const response = await supertest(app)
                .post('/post')
                .set('Authorization', `Bearer ${token}`)    
                .send({
                    content: null
                })

            return expect(response.status).toBe(400)
        })  */   
    })

    describe('listPosts', () => {
        test('Em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
                .get('/post')                
                .set('Authorization', `Bearer ${token}`)    

            return expect(response.status).toBe(201)
        })    

        test('Em caso de erro, deve retornar 500', async () => {
            const response = await supertest(app)
                .get('/post')                
                .set('Authorization', `Bearer aaaaaaaa`)    

            return expect(response.status).toBe(500)
        })   
    })

    describe('listUsers', () => {
        test('Em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
                .get('/user')                
                .set('Authorization', `Bearer ${token}`)    

            return expect(response.status).toBe(201)
        })    

        test('Em caso de erro, deve retornar 500', async () => {
            const response = await supertest(app)
                .get('/user')                
                .set('Authorization', `Bearer aaaaaaaa`)    

            return expect(response.status).toBe(500)
        })   
    })

    describe('listPostUsername', () => {
        test('Em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .get(`/user/${usuarioValido.username}/posts`)                
            .set('Authorization', `Bearer ${token}`)    

        return expect(response.status).toBe(201)
        })    

        test('Em caso de erro, deve retornar 400', async () => {
            const response = await supertest(app)
                .get(`/user/${makeRandomString(20)}/posts`)                
                .set('Authorization', `Bearer ${token}`)    

            return expect(response.status).toBe(400)
        })   
    })

    describe('UpdateUser', () => {
        test('Em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .put(`/user/${usuarioCadastrado.user_id}`)   
            .send({
                username: makeRandomString(10),
                avatar: '2',
                email: `${makeRandomString(10)}@mail.com`,
                password: '123456',
                apartment: 200,
            })             
            .set('Authorization', `Bearer ${token}`)    

        return expect(response.status).toBe(201)
        })    

        test('Em caso de erro, deve retornar 400', async () => {
            const response = await supertest(app)
                .put(`/user/0`)      
                .send({
                    username: makeRandomString(20),
                    avatar: '2',
                    email: `${makeRandomString(20)}@mail`,
                    password: '123456789',
                    apartment: 200,
                })          
                .set('Authorization', `Bearer ${token}`)    

            return expect(response.status).toBe(400)
        })   
    })
  
    describe('UpdatePost', () => {
        test('Em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .put(`/post/${postCadastrado.post_id}`)   
            .send({
                user_id: usuarioCadastrado.user_id,
                content: "bla bla85",
                name: "Teste25",
                apartment: 250,
                avatar: 4,
            })             
            .set('Authorization', `Bearer ${token}`)    

        return expect(response.status).toBe(201)
        })    

        test('Em caso de erro, deve retornar 400', async () => {
            const response = await supertest(app)
                .put(`/post/0`)      
                .send({
                user_id: 0,
                content: "bla bla85",
                name: "Teste25",
                apartment: 250,
                avatar: 4,
                })          
                .set('Authorization', `Bearer ${token}`)    

            return expect(response.status).toBe(400)
        })   
    })
     
    describe('DeletePost', () => {
        test('Em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .del(`/post/${postCadastrado.post_id}`)          
            .set('Authorization', `Bearer ${token}`)    

        return expect(response.status).toBe(201)
        })    

        test('Em caso de erro, deve retornar 400', async () => {
            const response = await supertest(app)
                .del(`/post/0`)                
                .set('Authorization', `Bearer ${token}`)    

            return expect(response.status).toBe(400)
        })   
    })
  
    describe('DeleteUser', () => {
        test('Em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .del(`/user/${usuarioCadastrado.user_id}`)                
            .set('Authorization', `Bearer ${token}`)    

        return expect(response.status).toBe(201)
        })    

        test('Em caso de erro, deve retornar 400', async () => {
            const response = await supertest(app)
                .del(`/user/0`)            
                .set('Authorization', `Bearer ${token}`)    

            return expect(response.status).toBe(400)
        })   
    })
})