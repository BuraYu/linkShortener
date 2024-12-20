const mongoose = require("mongoose");

const AuthenticationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { Timestamp: true }
);

const AuthModel = mongoose.model("User", AuthenticationSchema, "userdata");
module.exports = AuthModel;
