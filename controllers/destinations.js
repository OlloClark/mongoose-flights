const Flight = require("../models/flight");

module.exports = {
    addDestination
}

function addDestination(req, res) {
   
    Flight.findById(req.params.id, function(err, flight){
        console.log(req.body, "just added destination");
        req.body.arrival = new Date();
        flight.destinations.push(req.body);
        console.log(flight.destinations);
        flight.save(function (err){
            res.redirect(`/flights/${flight._id}`);
        });

    });
}