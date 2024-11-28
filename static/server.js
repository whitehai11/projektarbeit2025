const express = require('express');
const { Gpio } = require('onoff'); // Bibliothek zum Steuern der GPIO-Pins
const app = express();
const port = 3000;

// GPIO Pins definieren
const ledPin = new Gpio(17, 'out'); // GPIO 17 für die LED
const servoPin = new Gpio(18, 'out'); // GPIO 18 für den Servo

// Middleware, um statische Dateien (HTML, CSS, JS) zu servieren
app.use(express.static('public'));

// Endpoint zum Ein- und Ausschalten der LED
app.get('/led/:state', (req, res) => {
    const state = req.params.state;
    if (state === 'on') {
        ledPin.writeSync(1);  // LED einschalten
        res.send('LED ist an');
    } else if (state === 'off') {
        ledPin.writeSync(0);  // LED ausschalten
        res.send('LED ist aus');
    } else {
        res.send('Unbekannter LED-Status');
    }
});

// Endpoint zum Steuern des Servos
app.get('/servo/:position', (req, res) => {
    const position = req.params.position;
    if (position === 'open') {
        servoPin.writeSync(1);  // Servo öffnen
        res.send('Servo geöffnet');
    } else if (position === 'close') {
        servoPin.writeSync(0);  // Servo schließen
        res.send('Servo geschlossen');
    } else {
        res.send('Unbekannte Servo-Position');
    }
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
