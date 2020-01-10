'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const nba = require('./routes/nba');
const userRoutes = require('./routes/user');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
