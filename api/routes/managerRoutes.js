const express = require('express');
const router = express.Router();
const {
  getAllManagers,
  getManagerByID,
  getManagerByUsername,
  createManager,
  updateManager,
  deleteManager,
} = require('../controller/managerController');

router.route('/').get(getAllManagers).post(createManager);
router.route('/:id&:username').delete(deleteManager).put(updateManager).get(getManagerByID).get(getManagerByUsername);

module.exports = router;