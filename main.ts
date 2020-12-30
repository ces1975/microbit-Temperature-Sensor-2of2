radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("Celsius", receivedNumber)
})
basic.showString("\"RECEIVER\"")
radio.setGroup(6)
