

var Alert = require('./models/Alert')

var filledOrder = function(order) {
    return new Promise(function(resolve, reject) {
        if (order.reason == 'filled' && order.price) {
            resolve (order)
        }
    })
}

var checkAlerts = function(order) {
    return new Promise(function(resolve, reject) {
        Alert.find({sent:false}).then(function(alerts) {
            for (let i = 0; i < alerts.length; i++) {
                if (alerts[i].direction === 'above' && alerts[i].product_id === order.product_id && order.price >= alerts[i].price) {
                    alerts[i].sent = true;
                    alerts[i].save()
                    resolve(true)
                    return
                }
                if (alerts[i].direction === 'below' && alerts[i].product_id === order.product_id && order.price <= alerts[i].price) {
                    alerts[i].sent = true;
                    alerts[i].save()
                    resolve(true)
                    return
                }
            }
            resolve(false)
        })
    })
}

var Orders = {
    filledOrder: filledOrder,
    checkAlerts: checkAlerts,
}

module.exports = Orders