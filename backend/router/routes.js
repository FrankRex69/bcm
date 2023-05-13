const express = require('express');
const router = express.Router();
const services = require('../services/services');

// route for authetication user
router.post("/authUser", services.authUser);

// route for get all users from database
router.get("/getUsers", services.getUsers);

// route for create new user
router.post("/createUser", services.createUsers);

// route for message no db
router.post("/nodb", services.noDb);

module.exports = router;