const Flight = require("../models/flight");

module.exports = {
    addDestination
}

function addDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function (err){
            res.redirect(`/flights/${flight._id}`);
        });

    });
}