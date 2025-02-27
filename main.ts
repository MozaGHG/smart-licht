basic.forever(function () {
    if (input.soundLevel() > 20) {
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
