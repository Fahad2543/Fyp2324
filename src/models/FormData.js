import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
 medicineName: String,
 prescription: String,
});


export default mongoose.model('FormData', formDataSchema);
