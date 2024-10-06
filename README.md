# weatherApp
Here's a README description for your weather app:

---

# Weather App

This is a simple weather application that retrieves current weather data for a specified city using the OpenWeatherMap API. The user enters a city name, and the app displays the current temperature, weather description, and wind speed.

## Features

- Fetches weather data based on the city name entered by the user.
- Displays the city name, temperature, weather description, and wind speed.
- Shows error messages when an invalid city name is entered or if there are issues retrieving the data.

## How It Works

1. The user inputs a city name into the input field and clicks the "Get Weather" button.
2. The app makes an API request to OpenWeatherMap to get the current weather for the specified city.
3. If the city is found, the weather information (temperature, description, and wind speed) is displayed on the screen.
4. If the city is not found or there’s a problem fetching the data, an error message is shown.

## Code Overview

### Event Listeners
- **DOMContentLoaded:** Ensures that the DOM is fully loaded before executing any code.
- **getweatherbtn Click Event:** Triggers the weather fetching process when the user clicks the "Get Weather" button.

### Functions
- **fetchWeatherData(city):** Fetches the weather data from the OpenWeatherMap API. It constructs the request URL using the city name and the API key, then returns the data in JSON format.
- **displayWeatherData(data):** Updates the DOM with the city name, temperature, weather description, and wind speed based on the data fetched from the API.
- **showError():** Displays an error message when the city is not found or an error occurs during the fetch operation.

## API

- This app uses the [OpenWeatherMap API](https://openweathermap.org/api). You will need an API key to fetch the weather data.

## Getting Started

### Prerequisites

- **API Key:** You need an API key from [OpenWeatherMap](https://openweathermap.org/) to use their weather data services. Replace the `API_KEY` constant in the JavaScript code with your own key.

### Installation

1. Clone the repository or download the files.
2. Open `index.html` in your browser.
3. Enter a city name and click the "Get Weather" button.

### Example

1. Enter "New York" in the input field.
2. Click "Get Weather."
3. The app will display the temperature, weather description, and wind speed for New York.

---

