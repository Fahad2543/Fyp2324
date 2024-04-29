import mongoose from 'mongoose';

const contactFormSchema = new mongoose.Schema({
 name: String,
 email: String,
 message: String,
});

export default mongoose.model('ContactForm', contactFormSchema);
