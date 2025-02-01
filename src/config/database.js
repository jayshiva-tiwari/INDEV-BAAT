const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {

    await mongoose.connect('mongodb+srv://shivatiwari:Wls0DZPy4CGr74vd@indevbaat.y7huq.mongodb.net/')

}; 

module.exports = connectDB;

// MONGO-URL = 'mongodb+srv://shivatiwari:Wls0DZPy4CGr74vd@indevbaat.y7huq.mongodb.net/'
