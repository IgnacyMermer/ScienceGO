const express = require('express');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');

app.get('/', (req, res, status)=>{
    return res.status(200).json({
        message: 'Hello There!!!'
    });
});


app.use(cors());
app.use(express.json());


app.listen(2000, ()=>{
    console.log('server is running well!!!');
});