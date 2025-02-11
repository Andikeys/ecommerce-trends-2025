const express = require('express');
const path = require('path');
const app = express();

const PORT = 2000;

// Serve static files (CSS, images, etc.)
app.use(express.static(__dirname));

// Correctly resolve the absolute path for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

