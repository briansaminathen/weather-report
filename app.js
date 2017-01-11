var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?appid=eff74db66678068deef125febe148563&q=' + '' + '&units=imperial';

request({
    url: url,
    json: true
},  function (error, response, body) {
    if (error) {
        console.log('unable to fetch weather');
    } else {
        console.log(JSON.stringify(body, null, 4));
    }
})
