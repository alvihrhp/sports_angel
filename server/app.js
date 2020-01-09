'use strict';
if(process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sports_angel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});