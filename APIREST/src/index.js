const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');


const app = express();
const port = 10000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);



// rutas
app.get("/", (req, res) => {
    res.send("welcome user");
});

//mongodb conecion
mongoose
    .connect('mongodb+srv://camilo:Firulais77@cluster0.toqhjpk.mongodb.net/')
    .then(() => console.log('se conecto a la base de datos'))
    .catch((error) => console.error(error));



app.listen(port, () => console.log('server listening on port'));

