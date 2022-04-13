import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const server = express();
const PortServer = 5000;

server.use(bodyParser.json());

server.use('/users', usersRoutes);

server.get('/', (req, res) => {
  console.log('[TEST]!');

  res.send('Hello from homepage');
});

server.listen(PortServer, () =>
  console.log(`Server running on port: http://localhost:${PortServer}`)
);
