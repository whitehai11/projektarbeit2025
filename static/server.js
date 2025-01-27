const express = require('express');
const { Gpio } = require('onoff'); 
const port = 3000;


const ledPin = new Gpio(17, 'out');
const servoPin = new Gpio(18, 'out'); 
app.use(express.static('public'));

app.get('/led/:state', (req, res) => {
    const state = req.params.state;
    if (state === 'on') {
        ledPin.writeSync(1);  
        res.send('LED ist an');
    } else if (state === 'off') {
        ledPin.writeSync(0);  
        res.send('LED ist aus');
    } else {
        res.send('Unbekannter LED-Status');
    }
});

app.get('/servo/:position', (req, res) => {
    const position = req.params.position;
    if (position === 'open') {
        servoPin.writeSync(1);  
        res.send('Servo geöffnet');
    } else if (position === 'close') {
        servoPin.writeSync(0); 
        res.send('Servo geschlossen');
    } else {
        res.send('Unbekannte Servo-Position');
    }
});
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
