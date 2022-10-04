const express = require('express');
const fs = require('fs'); 
const app = express();

app.get('/products', (req, res)=>{
    const products = fs.readFile('./products.json', (err, data) => {
        if(err) res.send(err);
        else {
            data = JSON.parse(data);
            res.json(data);
        }
    });
});

const port = 5000;

app.listen(port, err => console.log(err || 'Server is running'));
