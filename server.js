var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    
        Date:' 5 March 2018',
        Day: 'Sunday',
        Time: '9:00pm',
       content: `<div class="booya"> <h3>HELLO HUMANS. <br> This is my very ver first WebApp <br> Unnecessary text to be followed.</h3> </div>`
};

var template = `
  <html>
    <head>
        <title>Article One </title>
                <link href="/ui/style.css" rel="stylesheet" />

        
    </head>
    <body>
        <a href="/"><h2>HOME</h2> </a>
        <hr bgcolor="blue">
        <h3>${Date}</h3><br>
        <h3>${Day}</h3><br>
        <h3>${Time}</h3>
        ${content}
    </body>
</html>  
`;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
