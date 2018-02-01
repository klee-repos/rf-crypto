const routes = require('express').Router();
const path = require('path');

var Alert = require('../models/Alert')

const accountSid = 'AC87fcc91906a8928179b4adb26144252d';
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = require('twilio')(accountSid, authToken);

routes.post('/testSMS', function(req, res) {
	let message = req.body.message
	twilioClient.messages
    .create({
        to: process.env.SMS_RECIPIENT,
        from: process.env.TWILIO_NUMBER,
        body: message,
    })
	.then(function(message) {
        res.send(message.body)
    })
})

routes.post('/createAlert', function(req, res) {
    let product_id = req.body.product_id
    let price = req.body.price
    let direction = req.body.direction
    let newAlert = Alert({
        product_id: product_id,
        price: price,
        direction: direction,
        sent: false,
    })
    newAlert.save()
    res.send("Alert created for " + product_id + " when it is " + direction + " " + price)
})

module.exports = routes;