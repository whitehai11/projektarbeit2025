let ledStatus = 'off'; // Einmalige Deklaration

// LED ein- und ausschalten
function turnOnLed() {
    if (ledStatus === 'off') {
        ledStatus = 'on';
        document.getElementById("led-visualizer").style.backgroundColor = '#4CAF50'; // LED grün
        updateStatus('on');
    }
}

function turnOffLed() {
    if (ledStatus === 'on') {
        ledStatus = 'off';
        document.getElementById("led-visualizer").style.backgroundColor = '#f44336'; // LED rot
        updateStatus('off');
    }
}

function shutdownLed() {
    ledStatus = 'off';
    document.getElementById("led-visualizer").style.backgroundColor = '#333'; // LED aus
    updateStatus('off');
}

// Status aktualisieren
function updateStatus(status) {
    const statusText = document.getElementById("status-text");
    if (status === 'on') {
        statusText.textContent = "LED Status: Eingeschaltet";
        statusText.classList.add("led-on");
        statusText.classList.remove("led-off");
    } else if (status === 'off') {
        statusText.textContent = "LED Status: Ausgeschaltet";
        statusText.classList.add("led-off");
        statusText.classList.remove("led-on");
    }
}

// Farbauswahl für LED
function changeLedColor(event) {
    const ledColor = event.target.value;
    if (ledStatus === 'on') {
        document.getElementById("led-visualizer").style.backgroundColor = ledColor;
    }
}
