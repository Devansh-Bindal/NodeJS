const express = require('express');
const userController = require('./../controllers/userController');

module.exports = (app) => {
    //middleware
    app.use(express.json());
    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })
   //Routes
    app.get('/user/get',userController.getAll);
    app.delete('/user/delete',userController.delete)
    app.post('/user/add', userController.addNewUser);

    app.use((req, res, next) => {
        console.log(Date.now());
        req.requestTime = Date.now();
        next();
    });
}