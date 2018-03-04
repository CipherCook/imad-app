var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    
        date:' 5 March 2018',
        day: 'Sunday',
        time: '9:00pm',
       content: `<div class="booya"> <h3>HELLO HUMANS. <br> This is my very ver first WebApp <br> Unnecessary text to be followed.</h3> </div>`
};
function createTemplate (data){
    var date=data.date;
    var day= data.day;
    var time=data.time;
    var content=data.content;
var template = `
  <html>
    <head>
        <title>Article One </title>
                <link href="/ui/style.css" rel="stylesheet" />

        
    </head>
    <body>
        <a href="/"><h2>HOME</h2> </a>
        <hr bgcolor="blue">
        <h3>${date}</h3><br>
        <h3>${day}</h3><br>
        <h3>${time}</h3>
        ${content}
    </body>
</html>  
`;
    return template;
        }
var counter =0;
app.get('/counter', function(req, res){
    counter=counter+1;
    res.send(counter.toString());
})
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleone));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
