const router = require("express").Router();
let User = require("../models/user.model");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const config = require("config");

//Register User
router.route("/register").post((req, res) => {
  var email = req.body.email;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      res.json({
        message: "The email is already existing.",
      });
    } else {
      const user = {
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        contactNo: req.body.contactNo,
        type: req.body.type,
        vehicleIds: [],
      };

      User.create(user)
        .then((response) => {
          res.json({
            message: "User registered successfully",
            user: user,
          });
        })
        .catch((error) => {
          res.json({
            message: "An error occurred",
          });
        });
    }
  });
});

// User Login
router.route("/login").get((req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (password == user.password) {
        res.json({
          message: "Login Successfull",
          user,
        });
      } else {
        res.json({
          message: "Password does not match",
        });
      }
    } else {
      res.json({
        message: "email is incorrect",
      });
    }
  });
});

module.exports = router;
