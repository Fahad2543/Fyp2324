// controllers/pharmacyResponseController.js

import PharmacyResponse from '../models/PharmacyResponse.js';

// Controller function to save a pharmacy response item
export const savePharmacyResponse = async (req, res) => {
  try {
    const { medicineName, prescription } = req.body;
    const pharmacyResponse = new PharmacyResponse({ medicineName, prescription });
    const savedPharmacyResponse = await pharmacyResponse.save();
    res.status(201).json(savedPharmacyResponse);
  } catch (error) {
    console.error('Error saving pharmacy response:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
