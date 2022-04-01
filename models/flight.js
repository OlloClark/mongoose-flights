const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
    },
    arrival: {
        type: Date,
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Delta", "Southwest", "United"]
    },
    airport: {
        type: String,
        enum: ["ATL", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        //idea credit: Ben Orloff
        default: function() {
            let today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth();
            let day = today.getDay();
        return new Date(year + 1, month, day);
        }
    },
    destinations: [destinationSchema]
}
);

module.exports = mongoose.model('Flight', flightSchema);