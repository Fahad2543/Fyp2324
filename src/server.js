// Final year project/server.js
import express from "express";
import colors from "colors";
import {Server} from "socket.io";
import http from "http";
import users from "./models/userModel.js";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import bodyParser from 'body-parser';
import cors from "cors";
import messageRoute from "./routes/messageRoute.js";
import multer from 'multer';
import mongoose from 'mongoose';
import isAuthenticated from "./middlewares/isAuthenticated.js";
import userModel from "./models/userModel.js";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';
const { v2 } = cloudinary;
// import messageRoutes from "./routes/messageRoutes.js";

import pharmacyResponseRoutes from './routes/pharmacyResponseRoutes.js';
import path from "path";
// import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
// import http from 'http';
import { app, server } from "./socket/socket.js";

// const app = express();
// const httpServer = http.createServer(app); // Renamed to avoid conflict
// const io = new Server(httpServer, {
//  path: 'http://localhost:3000/Chat', // Specify the path for Socket.IO connections
// });

// io.on('connection', (socket) => {
//  console.log('a user connected to /Chat');
// });

// httpServer.listen(8080, () => {
//  console.log('listening on *:8080');
// });

// import connectToMongoDB from "./db/connectToMongoDB.js";

// configure env
dotenv.config();

// database config
connectDB();

// const app = express();
const __dirname = path.resolve();

const notificationSchema = new mongoose.Schema({
  message: String,
  read: { type: Boolean, default: false },
});
const Notification = mongoose.model('Notification', notificationSchema);


// Middlewares
 
// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption={
  origin:'http://localhost:3000',
  credentials:true
};
app.use(cors(corsOption)); 
// app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/v1/message",messageRoute);
// app.use("/api/messages", messageRoutes);
app.use('/api/pharmacyResponses', pharmacyResponseRoutes);
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/pharmacyauth",require("./routes/pharmacyRoutes.js"));

// PORT
const PORT = process.env.PORT || 8080;

// Configure the multer middleware to handle file uploads.
const upload = multer({ dest: 'uploads/' });

// Configure the cloudinary client.
cloudinary.config({
  cloud_name: 'do2jxbuft',
  api_key: '824419742253678',
  api_secret: 'goHb7eGpvfLQAenoOKqtuZEnCgo'

  //     CLOUDINARY_CLOUD_NAME= 
  // CLOUDINARY_API_KEY= 
  // CLOUDINARY_API_SECRET= 

});



// Define the schema for the form data.
const formDataSchema = new mongoose.Schema({
 
  medicineName: String,
  prescription: String,
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Confirmed", "Delivered", "Cancelled"],
  },
});


// Create the model for the form data.
const FormData = mongoose.model('FormData', formDataSchema);




// Define the route for handling the form submission.
app.post('/submitform', upload.single('prescription'), async (req, res) => {
  
  
  // Save the prescription image to Cloudinary.
  const result = await cloudinary.uploader.upload(req.file.path);

  // Create a new form data object and save it to the database.
  const formData = new FormData({
   
    medicineName: req.body.medicineName,
    prescription: result.secure_url
  });
  await formData.save();

  // Send a success response to the client.
  res.json({ success: true });
});

app.get('/getallformdata', async (req, res) => {
  try {
    // Get all the form data from the database.
    const formData = await FormData.find();

    // Send the form data to the client.
    res.json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




const contactFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// Create the model for the contact form data.
const ContactForm = mongoose.model('/ContactForm', contactFormSchema);

// Define the route for handling the contact form submission.
app.post('/contactform', async (req, res) => {
  // Get the contact form data from the request body.
  const { name, email, message } = req.body;

  // Create a new contact form object and save it to the database.
  const contactForm = new ContactForm({
    name,
    email,
    message
  });
  await contactForm.save();

  // Send a success response to the client.
  res.json({ success: true });
});



// Configure Cloudinary
cloudinary.config({
  cloud_name: 'do2jxbuft',
  api_key: '824419742253678',
  api_secret: 'goHb7eGpvfLQAenoOKqtuZEnCgo'
});

// Configure multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'prescriptions',
    allowed_formats: ['jpg', 'png', 'pdf']
  }
});
const parser = multer({ storage: storage });

// Define a schema for the medicine request
const MedicinesRequestSchema = new mongoose.Schema({
  medicineName: String,
  prescriptionUrl: String // URL of the uploaded prescription image
});

// Define a model for the medicine request
const MedicinesRequest = mongoose.model('MedicinesRequest', MedicinesRequestSchema);

// Handle POST request for medicine request
app.post('/api/v1/auth/medicine-request', parser.single('prescriptionFile'), async (req, res) => {
  try {
    // Create a new medicine request
    const MedicinesRequest = new MedicinesRequest({
      medicineName: req.body.medicineName,
      prescriptionUrl: req.file.path ,
      users: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
      ],
      // Cloudinary URL of the uploaded prescription image
    });

    // Save the medicine request to MongoDB
    await MedicinesRequest.save();

    // Send success response
    res.json({ success: true, message: 'Medicine request saved successfully.' });
  } catch (error) {
    console.error('Error saving medicine request:', error);
    res.status(500).json({ success: false, message: 'Failed to save medicine request.' });
  }
});
app.get("/api/v1/auth/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
});



// run listen
app.listen(PORT, () => {
  console.log(`  ${process.env.DEV_MODE} MedLocate Server Running On port ${PORT}`.bgCyan.white);
});

