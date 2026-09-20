radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 99) {
        basic.showString("Furto")
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(100)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(100)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
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
