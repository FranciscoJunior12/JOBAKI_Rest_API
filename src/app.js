
const express = require('express');
const cors = require('cors');
const postRoute = require('../src/routes/postRoute');
const userRoute = require('../src/routes/userRoutes');

const connection = require('./database/connection')
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.json({ msg: "Hello World" })
});

app.use('/api/jobaki/post', postRoute);
app.use('/api/jobaki/user', userRoute);

const PORT = 5001 || process.env.PORT

app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
});

