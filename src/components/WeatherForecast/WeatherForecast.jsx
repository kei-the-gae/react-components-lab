import WeatherData from './WeatherData/WeatherData.jsx';
import './WeatherForecast.css';

const WeatherForecast = ({ forecasts }) => {
    return (
        <>
            {forecasts.map((forecast, i) => (
                <div className="weather" key={i}>
                    <WeatherData {...forecast} />
                </div>
            ))}
        </>
    );
};

export default WeatherForecast;