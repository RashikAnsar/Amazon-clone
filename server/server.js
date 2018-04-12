// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

// Database config
const config = require('./config');

const app = express();

mongoose.connect(config.database, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to Database');
    }
});

// Middle Ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

// Test base root
app.get('/',(req,res)=>{
    res.json({
        user: 'Rashik',
        project: 'Amazon',
        technologies: 'MEAN Stack'
    });
});

const userRoutes = require('./routes/account');
const mainRoutes = require('./routes/main');
const sellerRoutes = require('./routes/seller');
const productSearchRoutes = require('./routes/product-search');
app.use('/api', mainRoutes);
app.use('/api/accounts', userRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/search', productSearchRoutes);

app.listen(config.port, (err)=>{
    console.log(`Server is running on ${config.port}`);
});