//endpoint ruta para crear un usuario

const express = require('express');
const userSchema = require('../models/users');
const Router = express.Router();

//Endpoints CRUD
//crear usuario
Router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener todos los usuarios
Router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//obtener un usuario en especifico
Router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//actualizar un usuario
Router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, password, email, cedula } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, password, email, cedula } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Borrar un usuario
Router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findByIdAndDelete({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = Router;

