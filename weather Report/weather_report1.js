function showWeatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apikey ='ba62a2c9f86075b7a56c9a119b5d2501';//replace it with your api key 
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    fetch(apiUrl)
       .then(response => response.json())
       .then(data => {
        const weatherInfo =document.getElementById('weatherInfo');
        weatherInfo.innerHTML =`<h2>Weather in ${data.name}</h2>
                                <p>latitude value:${data.coord.lat} &#8451;</p>
                                <p>longitude value:${data.coord.lon} &#8451</p>`;
         })
         .catch(error=>{
                console.log('Error fetching weather:',error);
                const weatherInfo = document.getElementById('weatherInfo')
                weatherInfo.innerHTML =`<p>Failed to fetch the weather.Please try again .</p>`
         })
}
 document.getElementById('weatherForm').addEventListener('submit',showWeatherDetails);