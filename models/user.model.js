const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      // required: true,
      trim:true,
      max: 255,
      minlength:3,
    },
    email: {
      type: String,
      // required: true,
      unique:true,
      max: 255,
      minlength:3,
    },
    password: {
      type: String,
      // required: true,
      max: 1024,
      min: 6,
    },
    contactNo: {
      type: Number,
      min: 6,
    },
    regDate: {
      type: Date,
      default: Date.now,
    },
    vehicleIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
      },
    ],
    type: {
      type: String,
      max: 25,
      minlength:3,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
