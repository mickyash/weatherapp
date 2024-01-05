const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b589ec7d1emsh65e1d562029e740p14e3d9jsnf1cfa14ef32c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{ 
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		
		cloud_pct.innerHTML = response.cloud_pct
		cloud_pct3.innerHTML = response.cloud_pct

		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		temp3.innerHTML = response.temp

		feels_like.innerHTML = response.feels_like
		feels_like3.innerHTML = response.feels_like


		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		humidity3.innerHTML = response.humidity

		min_temp.innerHTML = response.min_temp
		min_temp3.innerHTML = response.min_temp


		max_temp.innerHTML = response.max_temp
		max_temp3.innerHTML = response.max_temp


		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_speed3.innerHTML = response.wind_speed


		wind_degrees.innerHTML = response.wind_degrees
		wind_degrees3.innerHTML = response.wind_degrees


		sunrise.innerHTML = response.sunrise
		sunrise3.innerHTML = response.sunrise


		sunset.innerHTML = response.sunset
		sunset3.innerHTML = response.sunset





		cloud_pct4.innerHTML = response.cloud_pct
		temp4.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		min_temp4.innerHTML = response.min_temp
		max_temp4.innerHTML = response.max_temp
		wind_speed4.innerHTML = response.wind_speed
		wind_degrees4.innerHTML = response.wind_degrees
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
		

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")