const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello k8s')
})

app.listen('8080', () => console.log('listening on 8080 ...'))