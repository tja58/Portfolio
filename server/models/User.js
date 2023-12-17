const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("DBS_users", userSchema);
module.exports = User;
