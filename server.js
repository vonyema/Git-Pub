const express= require("express");
const app = express();
const drinks= require("./models/drinks.js");
const food = require("./models/food.js");
port = 3000;

app.listen (3000, () => {
    console.log("Server is listening");
})

app.get ("/drinks", (req,res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks});
})
app.get("/drinks/:id", (req,res) => {
    res.render('drinks_show.ejs', {drinks:drinks[req.params.id]})
})
app.get ("/food", (req,res) => {
    res.render('food_index.ejs',{allFoods:food});
})
app.get("/food/:id", (req,res) => {
    res.render('food_show.ejs', {food:food[req.params.id]})
})

app.get ("/", (req,res) => {
    res.send('Welcome to the Gitpub App!')
})
