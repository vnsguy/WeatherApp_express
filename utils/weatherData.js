const request = require('request');
const searchCity = require('../config');

const weatherData = (address, callback) => {
    const url = searchCity.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + searchCity.openWeatherMap.SECRET_KEY;
    request({url, json:true}, (error, {body})=> {
        if(error) {
            callback("Can't fetch data from open weather map api ", undefined)
        } else if(!body.main || !body.main.temp || !body.name || !body.weather) {
            callback("Unable to find required data, try another location", undefined);
        } else {
            callback(undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })
}

module.exports = weatherData;


/*
const requestt = require('request');
const toronto = require('../config');

const weatherDatat = (address, callback) => {
    const url = toronto.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + toronto.openWeatherMap.SECRET_KEY;
    request({url, json:true}, (error, {body})=> {
        if(error) {
            callback("Can't fetch data from open weather map api ", undefined)
        } else if(!body.main || !body.main.temp || !body.name || !body.weather) {
            callback("Unable to find required data, try another location", undefined);
        } else {
            callback(undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })
}

module.exports = weatherDatat;



const requestm = require('request');
const mumbai = require('../config');

const weatherDatam = (address, callback) => {
    const url = mumbai.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + mumbai.openWeatherMap.SECRET_KEY;
    request({url, json:true}, (error, {body})=> {
        if(error) {
            callback("Can't fetch data from open weather map api ", undefined)
        } else if(!body.main || !body.main.temp || !body.name || !body.weather) {
            callback("Unable to find required data, try another location", undefined);
        } else {
            callback(undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })
}

module.exports = weatherDatam;


const requestl = require('request');
const london = require('../config');

const weatherDatal = (address, callback) => {
    const url = london.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + london.openWeatherMap.SECRET_KEY;
    request({url, json:true}, (error, {body})=> {
        if(error) {
            callback("Can't fetch data from open weather map api ", undefined)
        } else if(!body.main || !body.main.temp || !body.name || !body.weather) {
            callback("Unable to find required data, try another location", undefined);
        } else {
            callback(undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })
}

module.exports = weatherDatal;*/