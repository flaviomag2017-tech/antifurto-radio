radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 99) {
        basic.showString("Furto")
    } else if (receivedNumber == 0) {
        basic.showString("Falso Allarme")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Stop Allarme")
})
radio.setGroup(1)
basic.forever(function () {
	
})
