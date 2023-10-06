const express = require('express')
const {ROUTES} = require("./routes");
const {setupProxies} = require("./proxy");
const cookie_parser=require('cookie-parser');

const app = express()
const port = 3001;

app.use(cookie_parser());

setupProxies(app, ROUTES);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})