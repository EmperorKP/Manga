const express = require('express');
const app = express();
const mangadata = require('./data/database');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const Router = require('./router/route')
const Authrout = require('./router/Auth')

const port = process.env.PORT || 3000;

const { ConnectToDB } = require('./db');

app.use(cors())
app.use(cookieParser());
app.use(express.json());

// Define the ping route
app.get('/data', (req, res) => {
  res.send(mangadata);
});

app.use('/api', Router)
app.use('/auth',Authrout)

// Updated home route
app.get('/', async (req, res) => {
  // const dbStatus = isConnected() ? 'disconnected':'connected';
  res.send({
    message: 'o_O',
    // database: dbStatus,
  });
});


app.listen(port, () => {
  console.log(`🚀 server running on PORT: ${port} http://localhost:${port}/`);
  ConnectToDB()
});


module.exports = app;
