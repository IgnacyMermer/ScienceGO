const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const cors = require('cors');
const authRoutes = require('./routes/Auth');

app.get('/', (req, res, status)=>{
    return res.status(200).json({
        message: 'Hello There!!!'
    });
});

mongoose.connect(`mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.dwxex.mongodb.net/database?retryWrites=true&w=majority`,
{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(result=>{
    console.log('database connected')
}).catch(err=>{
    console.log(err);
});


app.use(cors());
app.use(express.json());

app.use('/', authRoutes);


app.listen(2000, ()=>{
    console.log('server is running well!!!');
});