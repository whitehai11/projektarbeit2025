function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let footerText = document.getElementById("footer-text");
    if (document.body.classList.contains("dark-mode")) {
        footerText.style.color = "white";
    } else {
        footerText.style.color = "black";
    }
}

function turnOnLed() {
    const ledStatus = document.getElementById('status-text');
    ledStatus.classList.remove('led-off');
    ledStatus.classList.add('led-on');
    ledStatus.textContent = "LED Status: Eingeschaltet";
    document.getElementById('led-visualizer').style.backgroundColor = "#4CAF50";
}

function turnOffLed() {
    const ledStatus = document.getElementById('status-text');
    ledStatus.classList.remove('led-on');
    ledStatus.classList.add('led-off');
    ledStatus.textContent = "LED Status: Ausgeschaltet";
    document.getElementById('led-visualizer').style.backgroundColor = "#f44336";
}

function changeLedColor(event) {
    const color = event.target.value;
    document.getElementById('led-visualizer').style.backgroundColor = color;
}

function shutdownLed() {
    Swal.fire({
        title: 'Passwort Eingabe',
        input: 'password',
        inputPlaceholder: 'Passwort eingeben',
        showCancelButton: true,
        confirmButtonText: 'Bestätigen',
        cancelButtonText: 'Abbrechen',
        preConfirm: (password) => {
            if (password === 'Maro2010') {
                turnOffLed();
                Swal.fire('Erfolgreich!', 'LED wurde ausgeschaltet.', 'success');
            } else {
                Swal.fire('Fehler!', 'Versuch gar nicht erst, du schaffst es eh nicht.', 'error');
            }
        }
    });
}
