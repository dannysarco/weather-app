'use client'

import { useState } from 'react';

interface Weather {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

export default function Home() {
  const [zipCode, setZipCode] = useState('');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Weather = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch weather data');
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <input
        type="text"
        placeholder="Enter your zip code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}