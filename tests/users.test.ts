import request from "supertest";
import app from "../src/app";

describe('/users API', () => {
    it('GET /users should return emoty list initily', async () => {
        const res = await request(app).get('/users');
        expect(res.status).toBe(200);
        expect(res.body).toEqual([]);
    });

    it('POST /users should create a new user', async () => {
        const res = await request(app).post('/users').send({ name: "mohit", email: "mohit@gmail.com" });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body.name).toBe('mohit');
        expect(res.body.email).toBe('mohit@gmail.com');
    });

    it('POST /users should faild with invalid email', async ()=>{
        const res = await request(app).post('/users').send({
            name: "mohit",
            email: "invalid email",
        });

        expect(res.status).toBe(400);
        // expect(res.body.errors).toHaveProperty('email');
    })

    it("GET /users:userID should retun user", async () =>{
        const res = await request(app).get('/users/1');

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty("name");
    })
});