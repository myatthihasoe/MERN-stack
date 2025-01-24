// console.log('app is running')
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('./views/home.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname });
});

app.get('/contact-us', (req, res) => {
    res.redirect('/contact');
});

// 404 page middleware code
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});