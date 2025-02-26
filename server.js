const express = require("express");
const path = require("path");
const helmet = require("helmet");
const fs = require("fs");
const https = require("https");

const app = express();
const PORT = 80; // Redirect HTTP to HTTPS
const HTTPS_PORT = 443; // Secure server port

// Load SSL certificate and private key
const SSL_OPTIONS = { key: 
    fs.readFileSync('/home/ubuntu/certs/privkey.pem'), cert: 
    fs.readFileSync('/home/ubuntu/certs/fullchain.pem'),
    };

// Security headers middleware
app.use(helmet());

// Redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (req.protocol !== "https") {
    return res.redirect(301, "https://" + req.headers.host + req.url);
  }
  next();
});

// Redirect www to non-www
app.use((req, res, next) => {
  if (req.headers.host === "www.incociar.com") {
    return res.redirect(301, "https://incociar.com" + req.url);
  }
  next();
});

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Serve the HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Catch-all route for invalid paths
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start the HTTPS server
https.createServer(SSL_OPTIONS, app).listen(HTTPS_PORT, () => {
  console.log(`🚀 HTTPS Server running at https://incociar.com`);
});

// Start a separate HTTP server to redirect to HTTPS
const http = express();
http.use((req, res) => {
  res.redirect(301, "https://incociar.com" + req.url);
});
http.listen(PORT, () => {
  console.log(`🌐 HTTP Server running on port 80 (redirecting to HTTPS)`);
});
