let welcome = "WELCOME TO MOVIELAND!"

function printname() {
    counter = 0

    var timer = window.setInterval(() => {
        welcome1.innerHTML += welcome[counter++]

        if (counter == 21) {
            clearInterval(timer)
        }

    }, 250)
}
printname()