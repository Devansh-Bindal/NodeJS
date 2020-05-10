// const express=require('express');
const session = require('express-session');
// const cors=require('cors');
const bodyParser = require('body-parser');
const userController = require('./controller');

const requestTimer = (req, res, next) => {
    req.query.currentTime = Date.now();
    next();
}

// var corsOptions = {
//     origin: "http://localhost:1345",
//     optionsSuccessStatus: 200 
//   }
    module.exports = (app) => {
        //Middleware
        app.use((req, res, next) => {
                   res.append('Access-Control-Allow-Origin', ['*']);
                    res.append('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
                    res.append('Access-Control-Allow-Headers', 'Content-Type');
                    next();
                })
        app.use('/session', session({ secret: 'secret,key', saveUninitialized: false, resave: true }));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));


    //Routes
    app.get('/session',userController.session);

    app.get('/all', userController.getAll);

    app.delete('/delete', userController.delete);

    app.use(requestTimer);

    app.post('/add',userController.addNewUser)
};
