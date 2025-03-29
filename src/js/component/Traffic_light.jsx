import React, { useState } from 'react';

function TrafficLight() {
    const [color, setColor] = useState('red');

    const trafficLight = ['red', 'green', 'yellow', 'blue'];

    const changeTrafficLight = () => {
        const currentIndex = trafficLight.indexOf(color);
        const nextTrafficLight = trafficLight[(currentIndex + 1) % trafficLight.length];
        setColor(nextTrafficLight);
    };

    const handleLightClick = (clickedColor) => {
        setColor(clickedColor);
    };

    const getLightStyle = (lightColor) => ({
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        margin: '10px auto',
        backgroundColor: lightColor,
        boxShadow: color === lightColor ? `0 0 20px 5px ${lightColor}` : 'none',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease-in-out'
    });

    return (
        <div className="container text-center mt-5">
            <h2>Traffic Light</h2>
            <button className="btn btn-outline-dark btn-lg" onClick={changeTrafficLight}>
                Change Traffic Light
            </button>
            <div
                className="trafficLight-container text-center my-5"
                style={{
                    width: '150px',
                    height: '600px',
                    backgroundColor: '#333',
                    borderRadius: '20px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
                }}
            >
                <div className="trafficLight-light" style={getLightStyle('red')} onClick={() => handleLightClick('red')}></div>
                <div className="trafficLight-light" style={getLightStyle('blue')} onClick={() => handleLightClick('blue')}></div>
                <div className="trafficLight-light" style={getLightStyle('yellow')} onClick={() => handleLightClick('yellow')}></div>
                <div className="trafficLight-light" style={getLightStyle('green')} onClick={() => handleLightClick('green')}></div>
            </div>
        </div>
    );
}

export default TrafficLight;
