const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "the field is required"],
    },
    lastname: {
      type: String,
      required: [true, "the field is required"],
    },
    email: {
      type: String,
      required: [true, "the field is required"],
    },
    password: {
      type: String,
      required: [true, "the field is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "the field is required"],
    },
  },
  { timestamps: true }
);
const User = mongoose.model('User', UserSchema);

module.exports = User;