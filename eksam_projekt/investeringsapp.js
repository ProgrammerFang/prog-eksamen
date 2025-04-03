const express = require('express'); // importerer framwork express
const app = express(); // opretter en ny instans af en express-applikation
const login_kode = require('./public/login') //importer modulet med min kode i mappen public
const path = require('path');// bruges til at forstærke forbindelse mellem mapperne og hjemmesiden

app.set('views', path.join(__dirname, 'views')); //finder placeringen af views mappen.
app.set('view engine','ejs') // bruger EJS til at render view



app.use(express.static(path.join(__dirname,'public'))) //tillad brug af statiske filer som CSS

app.use(express.urlencoded({extended:true})); // aktiverer middleware til at læse form-data

app.get('/',(req,res)=> {
    res.render('index', {animals: animalRegistry.getAnimals()});
});

// tillader adgang til siden add-animal kører add-animal.ejs kompiler til HTML og sender til brugeren.
app.get('/loginside',(req,res)=> {
    res.render('loginside');
});

app.get('/opretKontoside',(req,res)=> {
    res.render('opretKontoside');
});

// route til at tilføje et dyr via post-formular
app.post('/OpretKontoside', (req, res) => {
    const { navn, kundeID } = req.body; // Henter data fra formularen
    animalRegistry.addAnimal(navn,kundeID); // Tilføjer dyret
    res.redirect('/'); // Genindlæser forsiden
});


//starter serveren fortæller at den er åben ved port 3000
app.listen(3000, () => {
    console.log('serveren kører på port 3000')
});

//indtast det på chrome http://localhost:3000