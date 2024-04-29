import express from 'express';
import { submitForm } from '../controllers/formDataController.js';

const router = express.Router();

router.post('/submitform', submitForm);

export default router;
