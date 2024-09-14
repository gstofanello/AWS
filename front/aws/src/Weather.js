import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        setGreetingMessage();
        fetchWeatherData();
    }, []);

    const city = 'São Paulo';
    const fetchWeatherData = async () => {
        const apiKey = 'bd6089239ab4f2aded308a22f8173f67';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Erro ao buscar dados do clima:', error);
        }
    };

    const setGreetingMessage = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour < 12) {
            setGreeting('Bom dia');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Boa tarde');
        } else {
            setGreeting('Boa noite');
        }
    };
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="weather-container">
            <header className="weather-header">
                <h1>{greeting}</h1>

                <p>A temperatura média de hoje em {city} é: {weatherData && weatherData.main ? `${weatherData.main.temp}°C` : 'Carregando...'}</p>
            </header>

            {weatherData && weatherData.main && (
                <section className="today-highlights">
                    <h2>Destaques de Hoje</h2>
                    <div className="highlight-cards">
                        <div className="highlight-card">
                            <span>Tempo Hoje: </span>
                            <span>{capitalizeFirstLetter(weatherData.weather[0]?.description || 'Dados não disponíveis')}</span>
                        </div>
                        <div className="highlight-card">
                            <span>Temperatura: </span>
                            <span>{weatherData.main.temp}°C</span>
                        </div>

                        <div className="highlight-card">
                            <span>Vento: </span>
                            <span>{weatherData.wind.speed} m/s</span>
                        </div>
                        <div className="highlight-card">
                            <span>Umidade: </span>
                            <span>{weatherData.main.humidity}%</span>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default WeatherApp;