// Bring in request
const request = require('request');

// util is built into JS
// use {} to pull out promisify from util
const {promisify} = require('util');    // required part of the util module - the full util is quite big, and we don't all of it.

const promisifiedRequest = promisify(request);

const getWeather = async () => {
    // request({
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=Blackpool,uk&APPID=${process.env.APPID}`,
        json: true  // true returns json formatted, false will return just a string
    
    // no longer required
    // }, (err, res) => {
    //     if (err) throw err;     // ; signify end of statement this is a complete if
    //     console.log(res.body);  // Will show me any error
    })

    // Add this
    return data.body
}

const thisWillSayHi = () => {
    console.log('Hi');
}

module.exports = getWeather;

// for multiple functions...
// module.exports = {
//     getWeather,
//     thisWillSayHi
// }