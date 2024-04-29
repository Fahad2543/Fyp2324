import ContactForm from '../models/ContactForm.js';

export const submitContactForm = async (req, res) => {
 const contactForm = new ContactForm({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
 });

 await contactForm.save();
 res.json({ success: true });
};
