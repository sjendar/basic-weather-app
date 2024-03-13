const express = require('express');
const axios = require('axios');
const app = express();
const Port = process.env.Port || 3000;

//files from the public Directory 
app.use(express.static('public'));

// route to fetch weather data 

app.get('/weather', async (req,res) => {
    try{
        const { city } = req.query;
    const apiKey = "61d968a8f985e00f28be0c6da6da35e8"
    const apiUrl =


    }
})
function getWeather() {
    
    const url = 

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 2) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const weatherInfo = 'Temperature: ${temperature}'
        }
    })
}