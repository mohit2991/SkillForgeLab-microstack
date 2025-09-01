import request from "supertest";
import app from '../src/app';

describe("/GET Health Check API", () => {
    it("Should return 200 OK with status message", async () => {
        const res = await request(app).get("/health");

        expect(res.status).toBe(200);
        expect(res.body.status).toBe("ok");
        expect(res.body).toHaveProperty('message', "Server is healthy 🚀");
    })
})