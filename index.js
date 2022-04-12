import express from 'express';
import bodyParser from 'body-parser';

const server = express();
const PortServer = 5000;

server.use(bodyParser.json());

server.listen(PortServer, () =>
  console.log(`Server running on port: http://localhost:${PortServer}`)
);
