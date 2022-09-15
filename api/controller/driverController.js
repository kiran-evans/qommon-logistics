const bcrypt = require('bcrypt');
const Driver = require('../model/driverSchema');

const getAllDrivers = async (req, res) => {
  const driver = await Driver.find();
  res.status(200).json(driver);
};

const getDriverByID = async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  res.status(200).json(driver);
};

const getDriverByUsername = async (req, res) => {
  const driver = await Driver.findOne(req.params.username);
  res.status(200).json(driver);
};

const createDriver = async (req, res) => {
    try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const newDriver = new Driver({
            username: req.body.username,
            password: hashedPassword,
            name: req.body.name,
            maxCarryWeight: req.body.maxCarryWeight,
        });

        // Respond
        const driver = await newDriver.save();
        res.status(201).json(newDriver);

    } catch(err) {
        console.log("ERROR: Failed to create new user.");
        return res.status(500).json(err);
    }
};

const updateDriver = async (req, res) => {
  const driver = await Driver.findById(req.params.id);

  if (!driver) {
    res.status(400).json({ message: `driver not found` });
  }

  const updateSchema = await Driver.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateSchema);
};

const deleteDriver = async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  if (!driver) {
    res.status(400).json({ message: `driver not found` });
  }

  await driver.remove();

  res.status(204).json({ id: req.params.id });
};

module.exports = {
  getAllDrivers,
  getDriverByID,
  getDriverByUsername,
  createDriver,
  updateDriver,
  deleteDriver,
};