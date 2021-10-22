require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('../server/routes/auth');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learning.vaz0k.mongodb.net/mern-learning?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.log('MongoDB error: ', error.message);
        process.exit(1)
    }
}

connectDB()

const app = express();

app.use(express.json())

app.use('/api/auth', authRouter);
const PORT = 5000; 

app.listen(PORT, function() {console.log(`Server started on port ${PORT}`)});