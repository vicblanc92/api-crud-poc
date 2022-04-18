import app from './app.js';

const portServer = 5000;

app.listen(portServer, () =>
  console.log(`Server running on port: http://localhost:${portServer}`)
);
