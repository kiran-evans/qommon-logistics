const express = require('express');
const router = express.Router();
const {
  getAllDrivers,
  getDriverByID,
  getDriverByUsername,
  createDriver,
  updateDriver,
  deleteDriver,
} = require('../controller/driverController');

router.route('/').get(getAllDrivers).post(createDriver);
router.route('/:id&:username').delete(deleteDriver).put(updateDriver).get(getDriverByID).get(getDriverByUsername);

module.exports = router;