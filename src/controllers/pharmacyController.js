import PharmacyUser from "../models/PharmacyUser";

const pharmacyregisterController = async (req, res) =>{
try {
    const { pharmacyname, email, password, phone, address,city, licensenumber } = req.body;
    //validation
    if (!pharmacyname) {
      return res.status(400).send({ error: 'Please enter your pharmacy name' });
    }
    if (!email) {
      return res.status(400).send({ error: 'Email is required' });
    }
    
    if (!password || password.length <8) {
      return res.status(400).send({ error: 'password is required of 8 length' });
    }
    if (!phone) {
      return res.status(400).send({ error: 'phone is required' });
    }
    if (!address) {
      return res.status(400).send({ error: 'address is required' });
    }
    if (!city) {
      return res.status(400).send({ error: 'city is required' });
    }
    if (!licensenumber) {
      return res.status(400).send({ error: 'licensenumber is required' });
    }

    const userExists = await PharmacyUser.findOne({ pharmacyname });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new PharmacyUser({ pharmacyname, email, password, phone, address,city, licensenumber });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

module.exports = {pharmacyregisterController};