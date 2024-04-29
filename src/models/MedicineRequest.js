// finalyearproject/models/MedicineRequest.js
import mongoose from "mongoose";

const medicineRequestSchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  prescriptionFile: { type: String, required: true },
});

const MedicineRequest = mongoose.model('MedicineRequest', medicineRequestSchema);

export default MedicineRequest;
