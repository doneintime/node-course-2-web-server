const express = require('express');
const hbs = require('hbs');
const app = express();

let port = (process.env.PORT || 3000);

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));
hbs.registerHelper('getGrreting', (text)=>{
    return text.toUpperCase();
})

// app.use((req, res, next)=>{
//     res.render('maitenance.hbs');
// })

app.get('/', (req, res) => {
    res.render("home.hbs", {
        homePage: "Home page",
        greeting: "Welcome to our new website:) hohoh"
    });
})

app.get('/about', (req, res) => {
    res.render('about.hbs');
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    })
})

app.get('/help', (req, res) => {
    res.render('help.hbs');
})

app.listen(port, ()=>{
    console.log(`App started on port ${port}`);
});