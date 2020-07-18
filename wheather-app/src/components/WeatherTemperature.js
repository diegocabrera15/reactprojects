import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,     
} from './../constants/Weathers'

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons name={icon} size="2x"></WeatherIcons>
    else
        return <WeatherIcons name={"day-sunny"} size="2x"></WeatherIcons>
};

const WeatherTemperature = ({temperature, weatherState}) =>(
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature}C°`}</span>
    </div>
);

export default WeatherTemperature;