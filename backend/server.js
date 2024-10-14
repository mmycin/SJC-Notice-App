import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();
const port = 8080;

app.use(cors({
    allowedHeaders: '*',
    origin: '*',
    methods: 'GET',
}));
app.use(express.json());

app.get('/api/notices', async (req, res) => {
    const notices = await prisma.notice.findMany();
    notices.reverse();
    res.json(notices);
});

app.get("/api/events", async (req, res) => {
    const events = await prisma.event.findMany();
    events.reverse();
    res.json(events);
});

async function main() {
    await app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });