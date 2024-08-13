import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';

const WeatherData = ({ day, img, imgAlt, conditions, time }) => {
    return (
        <>
            <h2>{day}</h2>
            <WeatherIcon src={img} alt={imgAlt} />
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </>
    );
};

export default WeatherData;