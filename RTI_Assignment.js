const http = require('http');

// For best practice, the API key should be held server side and called via wrapper to ensure security.
http.get('http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/8-348795_1_AL?apikey=N3Q2kVKuo6h8bfoLKFGwHvFUZ8BUBuPo ', (result) => {
    let weatherInfo = '';

    // Executes when data from the API is recieved.
    result.on('data',(chunk) => {
        weatherInfo += chunk;
    });

    // Executed when the complete response is received.
    result.on('end', () => {
        let parsedJson = JSON.parse(weatherInfo);
        console.log("Temperature in St. Paul MN is: " + parsedJson[0].Temperature.Value + " " + parsedJson[0].Temperature.Unit);
        console.log("Percent Chance of Rain: " + parsedJson[0].PrecipitationProbability + "%");
    });

    // Executes when an error is recieved.
    }).on("error", (error) => {
        console.log("Error: ", error.message);
});