import FormData from '../models/FormData.js';

export const submitForm = async (req, res) => {
 const formData = new FormData({
    medicineName: req.body.medicineName,
    prescription: req.body.prescription, // Assuming you're sending the prescription as text
 });

 await formData.save();
 res.json({ success: true });
};
