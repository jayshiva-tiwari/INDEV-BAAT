const express = require('express');
const app = express();
const connectDB = require('./config/database');

connectDB().then(()=>{
    console.log('Database connected');
    app.listen(9000, () => {
        console .log('listening on port 9000');
    });
}).catch((err) => {
    console.error(`database connection error: ${err.message}`);
})




