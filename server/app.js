'use strict';
<<<<<<< HEAD
require('dotenv').config();
=======
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}

>>>>>>> c50d2c7aa5e656e6f3b6ae6ef625b3a4c554b83c
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
<<<<<<< HEAD
const nba = require('./routes/nba');
=======
const userRoutes = require('./routes/user');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
>>>>>>> c50d2c7aa5e656e6f3b6ae6ef625b3a4c554b83c

mongoose.connect('mongodb://localhost:27017/sports_angel', {
	useNewUrlParser    : true,
	useUnifiedTopology : true
});
app.use('/users', userRoutes);

const routes = require('./routes');

app.use('/', routes);

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/nba', nba);

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
