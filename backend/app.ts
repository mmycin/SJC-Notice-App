import express from 'express';
import cors from 'cors';
import router from './routes/router.route.ts';
import { gracefulShutdown } from './controllers/api.controller.ts';

const app = express();

// CORS Setup (Ensure to customize for production)
app.use(cors({
    allowedHeaders: '*',
    origin: '*',
    methods: 'GET',
}));

// JSON middleware to parse incoming requests
app.use(express.json());

// Use router for API routes
app.use('/api', router);

// Graceful Prisma disconnection on exit
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
