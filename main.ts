basic.forever(function () {
    if (input.soundLevel() > 35) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else {
    	
    }
})
