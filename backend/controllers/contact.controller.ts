import type { Request, Response } from 'express';
import { PrismaClient, Type } from '@prisma/client';
import { Filter } from 'bad-words';

const prisma = new PrismaClient();
const filter = new Filter();

const addContact = async (req: Request, res: Response): Promise<void> => {
    const { name, email, type, message } = req.body;
    if (!name || !email || !type || !message) {
        res.status(400).json({ message: 'Missing required fields' });
    }

    try {
    const contact = await prisma.contact.create({
        data: {
            name,
            email,
            type,
            message: filter.clean(message),
        },
    });
    res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getContactTypes = async (req: Request, res: Response): Promise<void> => {
    try {
        const types = Object.values(Type);
        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { addContact, getContactTypes };