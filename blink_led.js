var Cylon = require("cylon");
// Initialize the robot
Cylon.api('http');//这个是用来连接本地浏览器的
Cylon.robot({//调用robot函数，并传入一个大对象来配置
             // Change the port to the correct port for your Arduino.
    connections: {//连接项定义小对象，用来配置连接arduino
        arduino: { adaptor: 'firmata', port: 'COM9' }//prot是我arduino的在mac上连接的端口
        //firmata是一个PC与MCU通讯的一个常用协议。其遵旨是能与任何主机PC软件包兼容，这样可方便地将对协议的支持加入软件系统中。Firmata起初是针对于PC与Arduino通讯的固件(Firmware)，其目标是让开发者可以通过PC软件完全地控件Arduino。
    },
    devices: {//设备，定义要操作的具体器件，这里是led,pin口是1
        led: { driver: 'led', pin: 12 }//
    },

    work: function(my) {//驱动函数，
        var brightness  = 0;
        my.led.turnOn();
        setInterval(function () {
            my.led.turnOff();
            my.led.brightness(brightness+=20 > 255?0:brightness);
            my.led.turnOn();
        },100);
    }
}).start();//配置好了之后就开始工作