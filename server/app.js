const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect("mongodb://Edgar778:lenta123456789@ds121299.mlab.com:21299/lot2", { useNewUrlParser: true }, async () => {
    console.log('Mongodb connected on port 27017');
});
const Car = require('./car');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
app.use(cors());


// app.use(bodyParser);
app.use(bodyParser.json({limit:'50mb'})); 
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));



app.get('/', (req,res)=>{
    res.redirect('http://localhost:3000/');
})

// app.get('/', (req, res) => {
//     fs.readFile(path.join(__dirname + '/car.json'), 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         const getData = JSON.parse(data);

//         for (let i = 0; i < getData.length; i++) {
//             delete getData[i]["#"];
//             delete getData[i]["Լոտ"];
//             delete getData[i]["անվանումներ"];
//            getData[i].price = getData[i].price.substr(0, getData[i].price.length - 3).replace(/,/g, '');

//         };
//         fs.writeFile('helloworld.json', JSON.stringify(getData), function (err) {
//             if (err) return console.log(err);
//             console.log('Hello World > helloworld.txt');
//           });
//         return res.send('ok');

//     });


// });








// app.get('/hi', (req,res)=>{
//     let getData;
//     fs.readFile(path.join(__dirname + '/helloworld.json'), 'utf8', function (err, data) {
//  getData = JSON.parse(data);
// console.log(getData);

// for(let i = 0; i < getData.length; i++){
//     const car = new Car(getData[i]);
//     car.save()
// }
//     })

// res.send('ok');
// });


app.post('/getDB', async (req,res)=>{
    console.log(req.body.name);
    const price = [];

    const getCar = await Car.find( { "name": { "$regex": `${req.body.name}`, "$options": "i" } });
    for(let i = 0; i < getCar.length; i++){
        price.push(++getCar[i].price);
    }

let unique = [...new Set(price)];

 
const len = unique.length;
const arrSort = unique.sort((a,b)=>{
return a - b
});
const mid = Math.ceil(len / 2);

const median = len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
const average = unique[len - 1];
const small = unique[0];

res.send({median, average, small});
});




app.listen(process.env.PORT || 3002, () => {
    console.log('ok');
});
