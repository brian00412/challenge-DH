const express = require('express');
const app = express ();
const PORT = 3001;
const apiProfessionRouter = require('./src/api/routes/profession')
const apiAppicantRouter = require('./src/api/routes/appicant')
const cors = require('cors')
/* const corsOptions = {
    origin: 'http://localhost:3001', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }; */

app.use(cors())
app.use("/api/professions",apiProfessionRouter);
app.use("/api/applicants",apiAppicantRouter);

app.listen(PORT, () =>{
    console.log("Servidor andando");
});
