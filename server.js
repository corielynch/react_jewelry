const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MonaAssemi")

mongoose.connection.on('connect', ()=>{console.log('connected to Mongo DB Mona Assemi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

)})

app.listen(PORT, console.log(`Server listening on PORT ${PORT}`))