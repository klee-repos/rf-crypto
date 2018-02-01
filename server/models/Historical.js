var mongoose = require('mongoose');
var guid = require('uuid/v4');

const ContextMap = require('../ContextMap')

/* /////////////////////////////////
// GDAX
*/ ///////////////////////////////

var historicalSchema = new mongoose.Schema(
{	
	created: {type:Date, default:Date.now},
	ethUSD: Number,
	btcUSD: Number,
	type: String,
});

var Historical = mongoose.model('Historical', historicalSchema);

module.exports = Historical;