const express = require('express');
const router = express.Router();
const services = require('../services/services');

router.post("/authUser", services.authUser);

router.get("/getUsers", services.getUsers);

router.post("/createUser", services.createUsers);


module.exports = router;