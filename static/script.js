let ledStatus = 'off';

// LED ein- und ausschalten
function turnOnLed() {
    if (ledStatus === 'off') {
        ledStatus = 'on';
        document.getElementById("led-visualizer").style.backgroundColor = '#4CAF50';
        updateStatus('on');
    }
}

function turnOffLed() {
    if (ledStatus === 'on') {
        ledStatus = 'off';
        document.getElementById("led-visualizer").style.backgroundColor = '#f44336';
        updateStatus('off');
    }
}

function shutdownLed() {
    ledStatus = 'off';
    document.getElementById("led-visualizer").style.backgroundColor = '#333';
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

// Dark Mode umschalten
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const darkModeButton = document.querySelector('.dark-mode-toggle');
    darkModeButton.textContent = document.body.classList.contains("dark-mode") ? '🌙' : '☀️';
}

// Passwortabfrage für Beenden
function confirmShutdown() {
    document.getElementById("password-modal").style.display = 'flex';
}

function checkPassword() {
    const password = document.getElementById("password-input").value;
    if (password === 'Maro2010') {
        shutdownLed();
        closeModal();
    } else {
        alert("Versuch gar nicht erst, schaffst es eh nicht!");
    }
}

function closeModal() {
    document.getElementById("password-modal").style.display = 'none';
}
