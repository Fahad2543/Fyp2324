// routes/pharmacyResponseRoutes.js

import express from 'express';
import { savePharmacyResponse } from '../controllers/pharmacyResponseController.js';

const router = express.Router();

// Route to save a pharmacy response item
router.post('/', savePharmacyResponse);

export default router;
