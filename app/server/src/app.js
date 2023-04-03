const express = require('express');
const app = express();

// Environement
const port = process.env.BACKEND_PORT || 8080

app.get('/', (req, res) => {
    res.status(200).send('Hello k8s');
})

app.listen(port, () => console.log('listening on 8080 ...'))