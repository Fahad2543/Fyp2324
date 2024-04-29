// Path: routes/pharmacyRoutes.js
import express from 'express';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import { pharmacyregisterController } from '../controllers/pharmacyController.js';


const router = express.Router();

// Pharmacy User Signup Route
router.post('/pharmacysignup',  pharmacyregisterController);

// // Pharmacy User Login Route
// router.post('/pharmacylogin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await PharmacyUser.findOne({ email });

//     if (!user || !await bcrypt.compare(password, user.password)) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in', error: error.message });
//   }
// });

export default router;
