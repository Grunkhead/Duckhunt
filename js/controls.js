var map = [];

document.onkeypress = function (e) {
    e = e || window.event;
    var charCode = e.keyCode || e.which;
    var charStr = String.fromCharCode(charCode);

    // If one of the keys are pressed add true to the array.
    if (charStr == 'f') map[0] = charStr == 'f'
    if (charStr == 'l') map[1] = charStr == 'l'

    // If both keys are pressed within 1 second, redirect to main menu.
    if (map[0] && map[1]) {
        window.location.replace('http://localhost:8080')
    }

    // Reset the pressed keys every second.
    setTimeout(function () {
        map = [];
    }, 1000);
};