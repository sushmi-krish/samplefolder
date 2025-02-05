function showWeatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city');
    const apikey ='ba62a2c9f86075b7a56c9a119b5d2501';//replace it with your api key 
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}`;
    fetch(apiUrl)
       .then(response => response.json())
       .then(data => {
        const weatherInfo =document.getElementById('weatherInfo');
        weatherInfo.innerHTML =`<h2>Weather in ${data.name}</h2>
                                <p>Temperature:${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p`;
         })
         .catch(error=>{
                console.log('Error fetching weather:',error);
                const weatherInfo = document.getElementById('weatherInfo')
                weatherInfo.innerHTML =`<p>Failed to fetch the weather.Please try again .</p>`
         })
}
 document.getElementById('weatherForm').addEventListener('submit',showWeatherDetails);