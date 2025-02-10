const express = require('express');
const app = express();

const PORT = 2000;

// Serve static files (images, CSS)
app.use(express.static(__dirname));

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

