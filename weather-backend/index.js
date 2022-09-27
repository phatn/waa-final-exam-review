const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const WEATHERS = [
    { id: "123" , city: "Fairfield", temperature: "85", humidity: "85", wind: "10"},
    { id: "345" , city: "Fairfield", temperature: "80", humidity: "85", wind: "10"},
    { id: "678" , city: "Iowa", temperature: "90", humidity: "85", wind: "10"},
    { id: "789" , city: "New York", temperature: "77", humidity: "85", wind: "10"}
];

app.get('/api/weathers', (req, res) => {
    res.status(200).json(WEATHERS);
});


app.get('/api/weathers/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json(WEATHERS.find(w => w.id == id));
});

app.listen(8080, () => {
    console.log('Listening to 8080...');
});