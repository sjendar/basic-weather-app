async function getWeather() {
    const city = 
    document.getElementById('city').value;
    try {
        const response = await
        fetch('/weather?city=${city}');
        const data = await
        response.json();

        document.getElementById('weather').
        innerText = 'Temperature: ${data.main.temp}°C, Description: $ {data.weather[0].description}';  
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
    }
