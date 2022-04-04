import express from 'express';

import config from './config.js';

const { host, port } = config;

const app = express();

app.use(express.static('public'));

app.listen(
  Number(port),
  host,
  () => console.log(`[+] Server listening at http://${host}:${port}`),
);
