// models/PharmacyResponse.js

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const pharmacyResponseSchema = new Schema({
  medicineName: {
    type: String,
    required: true,
  },
  prescription: {
    type: String,
    required: true,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
    
  },
  
}
);

const PharmacyResponse = model('PharmacyResponse', pharmacyResponseSchema);

export default PharmacyResponse;
