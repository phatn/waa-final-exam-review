const express = require('express');
const cors = require('cors');
const {json} = require("express");
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


const JOBS = [
    { id: "1", name: "Java", description: "The best Java job" },
    { id: "2", name: "Reactjs", description: "The best Reactjs job" },
    { id: "3", name: "Angular", description: "The best Angular job" }
]

app.get('/api/jobs', (req, res) => {
    res.json(JOBS);
})

app.get('/api/jobs/:id', (req, res) => {
    const { id } = req.params;
    res.json(JOBS.find(job => job.id == id));
})

app.post('/api/jobs', (req, res) => {
    const job = {...req.body, id: JOBS.length + 1};
    JOBS.push(job);
    res.json(JOBS);
})


app.get('/api/users/me', (req, res) => {
    const token = req.header('Authorization');
    console.log(`Token: ${token}`);

    res.json({
        id: "111",
        email: "uninan@miu.edu",
        firstname: "Umur",
        lastname: "Inane"
    });
})

app.get('/api/movies', (req, res) => {
    res.json(
        [
            { id: 1, title: "Back to the future", genre: "sci-fi"},
            { id: 2, title: "Harry Potter and the Sorcerer's Stones", genre: "adventure"}
        ]
    );
})

app.put('/api/jobs', (req, res) => {
    const job = req.body;
    let index = JOBS.findIndex(j => j.id == job.id);
    if(index > -1) {
        JOBS[index] = job;
    }
    res.json(job);
})

app.listen(8080, () => {
    console.log('Listening to 8080...');
});