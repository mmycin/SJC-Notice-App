import express from 'express';
import { getNotices, getEvents, getClubs, getFaculties, getMembers } from '../controllers/api.controller.js';

const router = express.Router();

// Define routes
router.get('/notices', getNotices);
router.get('/events', getEvents);
router.get('/clubs', getClubs);
router.get('/faculties', getFaculties);
router.get('/faculty/:name/members', getMembers);

export default router;
