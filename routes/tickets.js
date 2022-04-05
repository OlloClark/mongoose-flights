const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

//GET /flights/:id/tickets/new page
router.get("/flights/:id/tickets/new", ticketsCtrl.new);

//POST /flights/:id/tickets/new page
router.post('/flights/:id/tickets/new', ticketsController.create);

module.exports = router;