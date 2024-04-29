import express from 'express';
import { submitContactForm } from '../controllers/contactFormController.js';

const router = express.Router();

router.post('/contactform', submitContactForm);

export default router;
