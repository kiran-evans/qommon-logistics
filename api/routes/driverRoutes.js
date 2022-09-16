const express = require('express');
const router = express.Router();
const {
  getAllDrivers,
  getDriverByID,
  getDriverByUsername,
  createDriver,
  updateDriver,
  deleteDriver,
  loginDriver
} = require('../controller/driverController');

router.route('/').get(getAllDrivers).post(createDriver);
router.route('/:id').delete(deleteDriver).put(updateDriver).get(getDriverByID);
router.route('/:username').get(getDriverByUsername);
router.route('/login').post(loginDriver);

module.exports = router;