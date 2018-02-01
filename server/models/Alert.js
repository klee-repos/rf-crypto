var mongoose = require('mongoose');
var guid = require('uuid/v4');

const ContextMap = require('../ContextMap')

/* /////////////////////////////////
// Notification
*/ ///////////////////////////////

var alertSchema = new mongoose.Schema(
{	
    created: {type:Date, default:Date.now},
    product_id: String,
    price: Number,
    direction: String,
    sent: Boolean
});

var Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;