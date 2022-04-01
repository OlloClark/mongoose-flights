const Flight = require("../models/flight");

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req,res){
    res.render("flights/index");
}

function newFlight(req,res){
    res.render("flights/new");
}

function create(re, res){
    const flight = new Flight(req.body);
    flight.save(function(err){
        //suggested handling of errors
        if (err) return res.render("flights/new");
        //for now, redirect straight back to new.ejs
        res.redirect("flights/new");
    })
}
