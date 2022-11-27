const { Board, Proximity } = require("johnny-five");
const board = new Board({port:"COM3"});

board.on("ready", () => {
    const proximity = new Proximity({
        controller: "HCSR04",
        pin: 7
    });

    // proximity.on("change", () => {
    //     const {centimeters, inches} = proximity;
    //     console.log("距离(米)", centimeters/100);
    // });

    setInterval(()=>{
        const {centimeters, inches} = proximity;
        console.log("距离(米)", centimeters/100);
    },100)
});