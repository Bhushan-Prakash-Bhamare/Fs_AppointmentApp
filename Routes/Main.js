const express = require('express');
const path = require('path');
const Controller = require('../Controllers/Main');
const mainModel=require('../Models/mainModel');

const router = express.Router();

router.get('/',Controller.getAllAppointment);

router.post('/add-appointment', Controller.postAddAppointment);

router.delete('/delete-appointment/:id',Controller.postDeleteAppointment);

module.exports = router; 
