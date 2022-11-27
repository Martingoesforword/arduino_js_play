const { SerialPort } = require('serialport')
var list = SerialPort.list();
list.then(devices=> {
    devices.forEach(function(device) {
        console.log(device);
    });
})