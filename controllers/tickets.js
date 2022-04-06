const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
    new: newTicket,
    create
}

function create(req, res){
    Flight.findById(req.params.id, function(err, flightDoc){
        req.body.flight = flightDoc._id;
        req.body.price = parseInt(req.body.price)
        Ticket.create(req.body, function(err, ticket){
            res.redirect(`/flights/${flightDoc._id}`)
        })
    })
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render("tickets/new", {
            flight,
            title: "Add New Ticket"
        })
    })

    
}