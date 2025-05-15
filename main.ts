input.onButtonPressed(Button.A, function () {
    basic.showNumber(Valor)
})
let Valor = 0
Valor = 0
basic.forever(function () {
    Valor = input.lightLevel()
    if (Valor < 90) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
