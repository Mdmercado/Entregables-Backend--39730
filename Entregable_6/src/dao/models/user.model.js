const { Schema, model } = require("mongoose");
const collection = "usuarios";
// user model mongoose
const UserSchema = new Schema({
  // user data string
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },
});

const userModel = model(collection, UserSchema);

module.exports = {
  userModel,
};
