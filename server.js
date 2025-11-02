// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up the correct credentials (stored securely on the server)
const CORRECT_USERNAME = 'OS';
const CORRECT_PASSWORD = 'kernel';

// Middleware to parse URL-encoded bodies (for form data) and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lesson_scheduler.html'));
});
// Serve static files (your HTML, CSS, JS) from the current directory
app.use(express.static(path.join(__dirname)));

// 1. Define the login route
app.post('/login', (req, res) => {
    // Get credentials from the request body
    const { username, password } = req.body;

    // IMPORTANT: Security Check happens here on the server
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
        // Success: Send a JSON response indicating success
        // The client-side JavaScript will read this and redirect
        res.json({ success: true, redirect: '/new_webpage.html' });
    } else {
        // Failure: Send a JSON response indicating failure
        res.json({ success: false, redirect: '/accessdenied.html' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Matrix Rerum Server running at http://localhost:${port}`);
});