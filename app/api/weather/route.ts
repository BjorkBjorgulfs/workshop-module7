// Importing NextResponse from 'next/server' to handle responses in the Next.js API route
import { NextResponse } from "next/server";

// Define the GET function to handle GET requests made to this API route
export async function GET(req: Request) {
    // Extracting URL parameters from the request URL
    const urlParams = new URL(req.url).searchParams;
    // Retrieving the 'city' parameter from the URL, or defaulting to 'Reykjavik' if it is not provided
    const city = urlParams.get ('city') || 'Reykjavik';
    // Accessing the OpenWeather API key from environment variables
    const apiKey = process.env.OPENWEATHER_API_KEY;
    // Constructing the URL to fetch weather data from the OpenWeatherMap API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
    try {
        // Making a fetch request to the OpenWeatherMap API
        const response = await fetch(url);
        // Checking if the response is not successful (i.e., HTTP status code is not in the 200-299 range)
        if (!response.ok) {
            // If not successful, throw an error with the status and a message
            throw new NextResponse(JSON.stringify({ error: 'Failed to fetch weather data' }), {
                status: response.status,
            });
        }
        // Parsing the JSON response body
        const data = await response.json();
        // Returning a new NextResponse object with the weather data, a 200 status code, and setting the Content-Type header
        return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        // Logging the error to the console
        console.error("API call error:", error);
        // Returning a new NextResponse object with an error message and a 500 status code if an exception is caught
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch weather.' }), {
            status: 500,
        });
    }
}
  