require('dotenv').config();
const express = require('express');
const authRouter = require('./routes/auth');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/api', authRouter);

app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});