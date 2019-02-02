const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index.js');



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Create date object
app.get('/server', (req, res) => {
  var date = new Date();
  var objDate = {
    Hour: date.getHours(),
    Minutes: date.getMinutes(),
    Seconds: date.getSeconds()
  };
  res.end(JSON.stringify(objDate));
});


// routes
app.use(routes);


// satic files
app.use(express.static(path.join(__dirname, 'public')));


// star the server
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'))            
});