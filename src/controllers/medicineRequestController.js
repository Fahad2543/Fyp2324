// medicineRequestController.js
import MedicinesRequest from '../models/MedicineRequest.js';
import { cloudinary } from '../config/cloudinary.js'; // Make sure to import your cloudinary configuration

// Controller to handle medicine request creation
const createMedicineRequest = async (req, res) => {
    try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        // Create new medicine request with the image URL
        const newMedicineRequest = new MedicinesRequest({
            medicineName: req.body.medicineName,
            prescriptionUrl: result.secure_url,
        });

        // Save the new medicine request
        await newMedicineRequest.save();

        // Send success response
        res.status(201).json({
            success: true,
            data: newMedicineRequest,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating medicine request',
            error: error.message,
        });
    }
};

// Function to get all medicine requests
const getAllMedicineRequests = async (req, res) => {
    try {
        const requests = await MedicinesRequest.find();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exporting the controller functions
export { createMedicineRequest, getAllMedicineRequests };
