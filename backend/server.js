const cors = require('cors')
//importing the module we gonna use. 
const express = require('express');
//to json
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const addToyRoutes = require('./routes/toy.routes')
const session = require('express-session')
const app = express();

const port = 3004

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};


app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(bodyParser.json());// create the req.body object - from json
app.use(bodyParser.urlencoded({ extended: false })); // create the req.body object
app.use(cookieParser());

app.use(session({
  secret: 'sxjbqwerivnghksgkjbash',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

addToyRoutes(app)

app.listen(port, () => {
  console.log(`Toys app is at port: ${port}`);
})
