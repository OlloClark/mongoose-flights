const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get("/new", flightsCtrl.new);
router.get("/index", flightsCtrl.index);
//post a new flight



module.exports = router;