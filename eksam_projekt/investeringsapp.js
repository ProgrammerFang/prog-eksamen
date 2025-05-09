const express = require('express'); // importerer framwork express
const app = express(); // opretter en ny instans af en express-applikation
//const login_kode = require('./public/login') //importer modulet med min kode i mappen public
const path = require('path');// bruges til at forstærke forbindelse mellem mapperne og hjemmesiden

app.set('views', path.join(__dirname, 'views')); //finder placeringen af views mappen.
app.set('view engine','ejs') // bruger EJS til at render view

app.use(express.json());

app.use(express.static(path.join(__dirname,'public'))) //tillad brug af statiske filer som CSS

app.use(express.urlencoded({extended:true})); // aktiverer middleware til at læse form-data



//starter serveren fortæller at den er åben ved port 3000
app.listen(3000, () => {
    console.log('serveren kører på port 3000')
});

//indtast det på chrome http://localhost:3000
