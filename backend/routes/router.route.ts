import express from 'express';
import { getNotices, getEvents, getClubs, getFaculties, getMembers } from '../controllers/api.controller';
import { addContact, getContactTypes } from '../controllers/contact.controller';

// Initialize the router
const router = express.Router();

// Define routes with types
router.get('/notices', getNotices);
router.get('/events', getEvents);
router.get('/clubs', getClubs);
router.get('/faculties', getFaculties);
router.get('/faculty/:name/members', getMembers);
router.get('/contact/types', getContactTypes);
router.post('/contact', addContact);

export default router;
