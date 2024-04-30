
'use client';
import React, { useState } from 'react';
import { fetchWeather } from '../lib/data';

interface WeatherProps {
    city: string;
    main: {
        temp: number;
    };
    weather: {
        main: string;
    }[];
    wind: {
        speed: number;
    };
}

export default function WeatherPage() {
    const [city, setCity] = useState('Reykjavik');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [weather, setWeather] = useState<WeatherProps | null>(null); // Add type annotation for weather state

    async function handleFetch() {
        setIsLoading(true);
        setError(null);
        try {
            const weatherData = await fetch(`/api/weather?city=${city}`);
            const data = await weatherData.json();
            setWeather(data); 
        } catch (error) {
            setError(() => "Failed to fetch weather data");
            console.error(error);
        }
        setIsLoading(false);
    }

  return (
    <div>
      <h1>Weather Information</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
      />
      <button onClick={handleFetch} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Weather'}
      </button>
      {error && <p>{error}</p>}
    {weather && (
        <div>
            <h2>Weather in {city}</h2>
            <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Weather: {weather.weather[0].main}</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    )}
    </div>
  );
}
