const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');

require('./database');

const app = express();
const server = http.Server(app);

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});