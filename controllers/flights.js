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
    
        // Flight.forEach(function(flight){
        // console.log(flight)
        // })

        res.render("flights/index", {
            flights,
            title: "All Flights"
        })
    })}

function create(req, res) {
   Flight.create(req.body, function(err, flightDoc){
       if (err) return res.redirect("flights/new");
       res.redirect("flights")
   
   })
}

function newFlight(req, res) {
    res.render("flights/new")
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flightFromDatabase) {
        Ticket.find({flight: flightFromDatabase._id}, function (err,tickets){
            console.log(tickets)
        res.render("flights/show", {title: "Flight Details", flight: flightFromDatabase, tickets})
        })
    })
}
