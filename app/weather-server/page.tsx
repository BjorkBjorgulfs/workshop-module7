import { fetchWeather } from "../lib/data";
import SearchBox from "../components/ui/Form";

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

export async function loader({request}: {request: Request}) {
    const url = new URL(request.url);
    const city = url.searchParams.get('city') || 'Reykjavik';
    const weather: WeatherProps = await fetchWeather(city);

    console.log("Returning from loader:", { data: { weather } });
    return {data: {weather}};
};

export default function Page ({data}: {data:{weather: WeatherProps}}) {
    console.log("Rendering WeatherPage with data:", data)
    if (!data || !data.weather) {
        console.error("Weather data is missing or the structure is not as expected.");
        return <p>No weather data available.</p>;
    }
    const { weather } = data;
    
    

    return (
        <div>
            <h1>Weather Information</h1>
            <SearchBox initialCity={weather.city} />
            <div>
                <h2>Weather in {weather.city}</h2>
                <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
                <p>Weather: {weather.weather[0].main}</p>
                <p>Wind: {weather.wind.speed} m/s</p>
            </div>
        </div>
    );
    
};