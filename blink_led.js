var five = require("johnny-five");
var board = new five.Board({port:"COM3"});

board.on("ready", function() {
    const lcd1 = new five.LCD({
        pins: [7, 8, 9, 10, 11, 12],
        backlight: 6,
        rows: 2,
        cols: 20,
    });

    lcd1.useChar('check');
    lcd1.useChar('heart');
    lcd1.useChar('duck');


    let showContent = " SJH LOVES SRX";
    let index = 0;

    setInterval(()=>{
        lcd1.cursor(1, index);
        if(!showContent[index]) return
        lcd1.print(showContent[index]);
        index++;
    }, 100);

    this.repl.inject({
        lcd: lcd1,
    })

    // lcd1.off();

});