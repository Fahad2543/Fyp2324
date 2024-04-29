import express from 'express';
import FormData from '../models/FormData'; // Assuming FormData is your Mongoose model for the form data
import YesResponse from '../models/YesResponse'; // Assuming YesResponse is your Mongoose model for the yesresponse collection

const router = express.Router();

router.post('/api/moveAndDeleteData', async (req, res) => {
  try {
    const { itemId } = req.body;

    // Find the document in the formdata collection
    const document = await FormData.findById(itemId);

    if (!document) {
      return res.status(404).json({ error: 'Document not found.' });
    }

    // Create a new document in the yesresponse collection
    const newDocument = new YesResponse({
      ...document.toObject(),
      _id: undefined,
    });
    await newDocument.save();

    // Delete the document from the formdata collection
    await FormData.findByIdAndDelete(itemId);

    res.status(200).json({ message: 'Document moved and deleted successfully.' });
  } catch (error) {
    console.error('Error moving and deleting document:', error);
    res.status(500).json({ error: 'Failed to move and delete document.' });
  }
});

export default router;
