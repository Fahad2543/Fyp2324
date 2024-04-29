// backend/models/yesResponseModel.js

import mongoose from 'mongoose';

const yesResponseSchema = new mongoose.Schema({
  // Define the schema fields based on your requirements
  medicineName: {
    type: String,
    required: true,
  },
  prescription: {
    type: String,
    required: true,
  },
  // Add more fields as needed
}, { timestamps: true }); // Optional: Add timestamps for createdAt and updatedAt

const YesResponse = mongoose.model('YesResponse', yesResponseSchema);

export default YesResponse;
