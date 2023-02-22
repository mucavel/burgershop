const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const path = require('path')

app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const PORT = process.env.PORT || 3001;
app.listen(PORT,() => {})

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "thecornerdb"
})

app.post('/booking', (req, res) => {
    const buyerName = req.body.buyerName;
    const buyerTel = req.body.buyerTel;
    const buyerAddress = req.body.buyerAddress;
    const buyerChoice = req.body.buyerChoice;
    const observations = req.body.observations;

    const postQuery = "INSERT INTO `orders`(`buyerName`, `buyerTel`, `buyerAddress`, `buyerChoice`, `buyerObservations`) VALUES (?,?,?,?,?)"
    db.query(postQuery, [buyerName, buyerTel, buyerAddress, buyerChoice, observations], (err, result) => {
        res.send(result)
    })
})

