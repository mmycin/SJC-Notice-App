import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Initialize Express
const app = express();

// Dynamic Port for Deployment
const port = process.env.PORT || 8080;

// CORS Setup (Make sure to customize this for production security if needed)
app.use(cors({
    allowedHeaders: '*',
    origin: '*',
    methods: 'GET',
}));

// Middleware for parsing JSON
app.use(express.json());

// API route to get all notices
app.get('/api/notices', async (req, res) => {
    try {
        const notices = await prisma.notice.findMany();
        notices.reverse();
        res.json(notices);
    } catch (error) {
        console.error('Error fetching notices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// API route to get all events
app.get('/api/events', async (req, res) => {
    try {
        const events = await prisma.event.findMany();
        events.reverse();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Main function to start the server
async function main() {
    try {
        await app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
