export async function fetchWeather(city: string) {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
  try {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch weather fun');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch weather", err);
    throw new Error("Failed to fetch weather.");
  }
}