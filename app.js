const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

// Code Changed

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/ejs', (req, res) => {
  res.render('word',
    {pageTitle: 'my cools ejs page'}
  );
})

app.get('/nodemon', (req, res) => {
  res.sendFile('no kill node process then restart and fresh')
})

// endpoint, middleware(s)
app.get('/helloRender', (req, res) => {
  res.send('Hello Express from Real World!<br><a href="/">Back to Home</>')
})


app.listen(
  port,
   ()=> console.log(
    `server is running on ... ${port}`));