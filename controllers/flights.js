const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function index(req,res) {
    Flight.find({}, function(err, flights){
        console.log(flights);
        res.render("flights/index", {
            flights,
            title: "All Flights"
        })
    })}

function create(req, res) {
    if (!req.body.departs) {
        req.body.departs = undefined
    }
    console.log(req.body)
    Flight.create(req.body, function(err, flightDoc){
        if (err) return res.redirect("flights/new");
        res.redirect("index")
   
   })
}

function newFlight(req, res) {
    res.render("flights/new")
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flightFromDatabase) {
        Ticket.find({flight: flightFromDatabase._id}, function (err,tickets){
        res.render("flights/show", {title: "Flight Details", flight: flightFromDatabase, tickets})
        })
    })
}
