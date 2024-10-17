import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

const getNotices = async (req, res) => {
    try {
        const notices = await prisma.notice.findMany();
        notices.reverse();
        res.json(notices);
    } catch (error) {
        console.error('Error fetching notices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getEvents = async (req, res) => {
    try {
        const events = await prisma.event.findMany();
        events.reverse();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getClubs = async (req, res) => {
    try {
        const clubs = await prisma.club.findMany();
        res.json(clubs);
    } catch (error) {
        console.error('Error fetching clubs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getFaculties = async (req, res) => {
    try {
        const faculties = await prisma.faculty.findMany({
            select: { name: true },
        });
        res.json(faculties);
    } catch (error) {
        console.error('Error fetching faculties:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getMembers = async (req, res) => {
    const { name } = req.params;
    try {
        const faculty = await prisma.faculty.findFirst({
            where: { name: name },
            include: { members: true }
        });
        res.json(faculty);
    } catch (error) {
        console.error('Error fetching faculty members:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Gracefully disconnect Prisma on server shutdown
const gracefulShutdown = async () => {
    try {
        await prisma.$disconnect();
        console.log('Prisma disconnected.');
    } catch (error) {
        console.error('Error during Prisma disconnection:', error);
    }
};


export { getNotices, getEvents, getClubs, gracefulShutdown, getFaculties, getMembers };
