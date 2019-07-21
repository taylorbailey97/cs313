const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    serveID: { type: Number, required: true },
    sName: { type: String, required: true },
    cost: { type: Number, required: true },
    time: { type: Number, required: true }
});

module.exports = mongoose.model('service', schema);