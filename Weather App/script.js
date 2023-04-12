const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '34e15a72c1msh24d1ee69f6c67aap14b883jsna7a3ab23356a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));