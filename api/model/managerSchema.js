const mongoose = require('mongoose');

const managerSchema = mongoose.Schema({
  username: {
    unique: true,
    type: String,
    required: true,
    min: 3,
  },
  password: {
    type: String,
    required: true,
    min: 10,
  },
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('manager', managerSchema);