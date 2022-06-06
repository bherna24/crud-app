const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

//routes
const books = require('./routes/api/books');

const app = express();

//connect Database
connectDB();

//cors
app.use(cors({ origin: true, credentials:true}));

//init middleware
app.use(express.json({extended:false}));

app.get('/', (req, res) => res.send('Hello world! this ision i think or is it react ? anyhow this is onyl javascript lol'));

//use routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));