const express = require('express');
const bodyParser = require('body-parser');

let app = express();
const PORT = process.env.PORT || 3200;

app.use(bodyParser.json());

app.use((req, res) => {
    console.log('404 route not found');

    res.status(404).send({
        message: 'Route not found',
    })
});

app.use((err, req, res, next) => {
    console.log('404 route not found');

    res.status(404).send({
        message: 'Route not found',
    })
});

app.listen(PORT, () => {
    console.log(`Express app listening on port: ${PORT}`);
});
