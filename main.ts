radio.setGroup(10)
led.stopAnimation()
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.showString("B")
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
        basic.showString("A+B")
    }
    basic.pause(200)
})
