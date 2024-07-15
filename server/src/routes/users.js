const { Router } = require('express');
const app = Router();

app.post('/register', (req, res) => {
    res.send("Home");
});

module.exports = app;