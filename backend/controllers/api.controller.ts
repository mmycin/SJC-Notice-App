import { PrismaClient } from '@prisma/client';
import type { Request, Response } from 'express';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Type definitions (if needed)
type FacultyWithMembers = {
    name: string;
    members: {
        id: number;
        name: string;
        image: string;
        position: string;
        facultyId: number;
    }[];
};

const getNotices = async (req: Request, res: Response): Promise<void> => {
    try {
        const notices = await prisma.notice.findMany();
        notices.reverse();
        res.json(notices);
    } catch (error) {
        console.error('Error fetching notices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getEvents = async (req: Request, res: Response): Promise<void> => {
    try {
        const events = await prisma.event.findMany();
        events.reverse();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getClubs = async (req: Request, res: Response): Promise<void> => {
    try {
        const clubs = await prisma.club.findMany();
        res.json(clubs);
    } catch (error) {
        console.error('Error fetching clubs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getFaculties = async (req: Request, res: Response): Promise<void> => {
    try {
        const faculties = await prisma.faculty.findMany({
            select: { name: true, group: true },
        });
        res.json(faculties);
    } catch (error) {
        console.error('Error fetching faculties:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getMembers = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.params;
    try {
        const faculty = await prisma.faculty.findFirst({
            where: { name: name },
            select: { members: true } // Only select the members
        }) as FacultyWithMembers | null;

        if (faculty && faculty.members.length > 0) {
            res.json(faculty.members); // Return only the members array
        } else if (faculty && faculty.members.length === 0) {
            res.status(404).json({ error: 'No members found for this faculty' });
        } else {
            res.status(404).json({ error: 'Faculty not found' });
        }
    } catch (error) {
        console.error('Error fetching faculty members:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Gracefully disconnect Prisma on server shutdown
const gracefulShutdown = async (): Promise<void> => {
    try {
        await prisma.$disconnect();
        console.log('Prisma disconnected.');
    } catch (error) {
        console.error('Error during Prisma disconnection:', error);
    }
};

export { getNotices, getEvents, getClubs, gracefulShutdown, getFaculties, getMembers };
