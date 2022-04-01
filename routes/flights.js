const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

//GET /flights/new page
router.get("/new", flightsCtrl.new);
//GET /flights/index
router.get("/index", flightsCtrl.index);
//POST a new flight
router.post("/index", flightsCtrl.create);



module.exports = router;