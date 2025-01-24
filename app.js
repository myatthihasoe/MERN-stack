// console.log('app is running')
const express = require('express');

const app = express();
app.set('views','./views') // set the views directory
app.set('view engine', 'ejs'); // set the view engine to ejs

app.get('/', (req, res) => {
    // res.sendFile('./views/home.html', { root: __dirname });
    res.render('home');

});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/contact-us', (req, res) => {
    res.redirect('/contact');
});

// 404 page middleware code
app.use((req, res) => {
    res.status(404).render('404');
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});