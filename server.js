// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// // Proxy requests to local server
// app.use('/Bank-of-Flatiron', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

// // Start server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Proxy server listening on port ${PORT}`);
// });
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors'); // Import the cors package

const app = express();

// Enable CORS for all routes
app.use(cors());

// Proxy requests to local server
app.use('/Bank-of-Flatiron', createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true
}));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});