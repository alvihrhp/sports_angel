'use strict';
if(process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/sports_angel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const routes = require('./routes')

app.use('/',routes)

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});