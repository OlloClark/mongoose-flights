const Flight = require("../models/flight");

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req,res){
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

function create(req, res){
   Flight.create(req.body, function(err, flightDoc){
       res.redirect("/flights/index")
   
   })
}

function newFlight(req,res){
    res.render("flights/new")
}