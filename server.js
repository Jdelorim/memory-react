'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 4000;

  
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/memory-react', 
  {
     useNewUrlParser: true , 
     useUnifiedTopology: true, 
     useFindAndModify: false 
  });

  const connection = mongoose.connection;
  connection.once('open', ()=>{
    console.log('DB connected!')
  }).then(()=>{
    // require('./config/seed');
  })
  
  require('./routes/index.js')(app);
  require('./routes/gameData')(app);
  
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  })