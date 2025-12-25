import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve the React app from the 'build' folder (adjust if you're using a different folder like 'dist')
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Handle React routing: Serve index.html for any route not directly matching a file
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Set up the port and start the server
const PORT = process.env.PORT || 5173;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
