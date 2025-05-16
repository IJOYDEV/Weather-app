
    async function getWeather() {
      const city = document.getElementById('cityInput').value;
      const apiKey = '981998f7df66bd547a4829c6f9ab37f9'; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
          alert('City not found. Please enter a valid city.');
          return;
        }

        document.querySelector('h2').textContent = `Weather in ${data.name}`;
        document.querySelector('.temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.description').textContent = data.weather[0].description;
        document.querySelector('.details').innerHTML = `
          <span>Humidity: ${data.main.humidity}%</span>
          <span>Wind: ${data.wind.speed} km/h</span>
        `;
      } catch (error) {
        alert('Error fetching weather data. Please try again later.');
        console.error(error);
      }
    }
