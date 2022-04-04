import express from 'express';

const port = 3000;

const app = express();

app.use(express.static('public'));

app.listen(
  port,
  () => console.log(`[+] Server listening at http://127.0.0.1:${port}`),
);

process.on('SIGTERM', () => {
  console.log('[!] SIGTERM: Shutting down server...');
  process.exit(0);
});
