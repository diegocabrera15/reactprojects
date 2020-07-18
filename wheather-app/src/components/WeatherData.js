import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,     
} from './../constants/Weathers'

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={CLOUDY}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'10 km/h'}></WeatherExtraInfo>
    </div>
);

export default WeatherData;