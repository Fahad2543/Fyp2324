// finalyearproject/models/PharmacyPharmacyUser.js

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const PharmacyUserSchema = new mongoose.Schema({
 pharmacyname: {
    type: String,
    required: true,
 },
 email: {
    type: String,
    required: true,
    unique: true,
 },
 password: {
    type: String,
   required: true,
    min:8,
 },
 phone: {
    type: String,
    required: true,
 },
 address: {
    type: String,
    required: true,
 },
 city: {
    type: String,
    required: true,
 },
 licensenumber: {
  type: String,
  required: true,
},
role:{
   type :String ,
   default:'pharmacist'
}

}, { timestamps: true });

// Hash the password before saving the PharmacyUser model
PharmacyUserSchema.pre('save', async function (next) {
 if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
 }
 next();
});

export default mongoose.model('PharmacyUser', PharmacyUserSchema);

