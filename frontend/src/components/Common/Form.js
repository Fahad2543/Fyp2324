import React, { useState } from 'react';
import axios from 'axios';
import './Homepage.css';
import { Toaster, toast } from 'react-hot-toast'; 

const Form = () => {
    const [medicineName, setMedicineName] = useState('');
    const [prescription, setPrescription] = useState(null); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if medicineName is empty
        if (!medicineName.trim()) {
            toast.error('Please enter the medicine name.');
            return;
        }


        if (prescription) {
            const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
            if (!allowedTypes.includes(prescription.type)) {
                toast.error('Prescription file type not allowed. Please upload a png, jpg, or pdf file.');
                return;
            }
            if (prescription.size > 2 * 1024 * 1024) {
                toast.error('Prescription file size should be less than or equal to 2 MB.');
                return;
            }
        }

        const formData = new FormData();
        
        formData.append('medicineName', medicineName);
        if (prescription) {
            formData.append('prescription', prescription);
        }

        try {
            const response = await axios.post('http://localhost:8080/submitform', formData);
            if (response.data.success) {
                const randomPharmacistId = Math.floor(Math.random() * 500); // Generate a random ID
                toast.success(`Form submitted successfully! Successfully sent your medicine request to Pharmacist ${randomPharmacistId}.`);
            } else {
                toast.error('An error occurred while submitting the form.');
            }
        } catch (error) {
            toast.error('An error occurred while submitting the form.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="medicineName">Medicine Name:</label>
                <input type="text" id="medicineName" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="prescription">Prescription:</label>
                <input type="file" id="prescription" onChange={(e) => setPrescription(e.target.files[0])} className="form-control-file" />
            </div>

            <button type="submit" className="btn submit-button btn-block" style={{ color: "#ffff", backgroundColor: "#17252A" }}>Submit</button>
            <Toaster /> {/* Toaster component to display toast messages */}
        </form>
    );
};

export default Form;
