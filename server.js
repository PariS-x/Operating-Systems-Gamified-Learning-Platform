const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up the correct credentials (stored securely on the server)
const CORRECT_USERNAME = 'OS';
const CORRECT_PASSWORD = 'kernel';

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lesson_scheduler.html'));
});

app.use(express.static(path.join(__dirname)));

app.post('/login', (req, res) => {
   
    const { username, password } = req.body;

    
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
        
        res.json({ success: true, redirect: '/new_webpage.html' });
    } else {
        
        res.json({ success: false, redirect: '/accessdenied.html' });
    }
});


app.listen(port, () => {
    console.log(`Matrix Rerum Server running at http://localhost:${port}`);
});