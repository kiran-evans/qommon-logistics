const bcrypt = require('bcrypt');
const Manager = require('../model/managerSchema');

const getAllManagers = async (req, res) => {
  const manager = await Manager.find();
  res.status(200).json(manager);
};

const getManagerByID = async (req, res) => {
  const manager = await Manager.findById(req.params.id);
  res.status(200).json(manager);
};

const getManagerByUsername = async (req, res) => {
  const manager = await Manager.findOne(req.params.username);
  res.status(200).json(manager);
};

const createManager = async (req, res) => {
    try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const newManager = new Manager({
            username: req.body.username,
            password: hashedPassword,
            name: req.body.name,
        });

        // Respond
        const manager = await newManager.save();
        res.status(201).json(newManager);

    } catch(err) {
        console.log("ERROR: Failed to create new user.");
        return res.status(500).json(err);
    }
};

const updateManager = async (req, res) => {
  const manager = await Manager.findById(req.params.id);

  if (!manager) {
    res.status(400).json({ message: `manager not found` });
  }

  const updateSchema = await Manager.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateSchema);
};

const deleteManager = async (req, res) => {
  const manager = await Manager.findById(req.params.id);
  if (!manager) {
    res.status(400).json({ message: `manager not found` });
  }

  await manager.remove();

  res.status(204).json({ id: req.params.id });
};

module.exports = {
  getAllManagers,
  getManagerByID,
  getManagerByUsername,
  createManager,
  updateManager,
  deleteManager,
};