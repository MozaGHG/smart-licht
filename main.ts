basic.forever(function () {
    if (input.soundLevel() > 100) {
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
