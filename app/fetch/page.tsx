import { fetchWeather } from "../lib/data";

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

export default async function page () {
    const city = "London";
    const weather: WeatherProps = await fetchWeather(city);
    

    return (
        <div>
            <h1>Weather Information</h1>
            <div>
                <h2>Weather in {city}</h2>
                <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
                <p>Weather: {weather.weather[0].main}</p>
                <p>Wind: {weather.wind.speed} m/s</p>
            </div>    
        </div>
    );
}