const express = require('express');
const path = require('path');
require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const distPath = path.join(__dirname, "../", "../", "dist");
const url = 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles';
const port = 8080;

app.use(express.static(distPath));

app.get('/api/vehicle/:reg', async function (req, res){
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.DVLA_API_KEY
        },
        body: JSON.stringify({"registrationNumber": req.params.reg})
      };
      
    const response = await fetch(url, options);
    const data = await response.json();
    res.send(data);
});

app.listen(port);