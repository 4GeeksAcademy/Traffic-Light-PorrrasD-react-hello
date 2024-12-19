import React, { useState } from 'react';

function Traffic_light() {
    const [color, setColor] = useState('red');

    const trafficLight = ['red', 'green', 'yellow', 'blue'];

    const changeTrafficLight = () => {
        const currentIndex = trafficLight.indexOf(color);

        const nextTrafficLight = trafficLight[(currentIndex + 1) % trafficLight.length];

        setColor(nextTrafficLight);
    };

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
                    boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                }}
            >
                <div className="trafficLight-container my-4">
                    <div
                        className={`trafficLight-light ${color === 'red' ? 'bg-danger' : 'bg-secondary'}`}
                        style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '10px auto' }}
                    ></div>
                    <div
                        className={`trafficLight-light ${color === 'blue' ? 'bg-primary' : 'bg-secondary'}`}
                        style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '10px auto' }}
                    ></div>
                    <div
                        className={`trafficLight-light ${color === 'yellow' ? 'bg-warning' : 'bg-secondary'}`}
                        style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '10px auto' }}
                    ></div>

                    <div
                        className={`trafficLight-light ${color === 'green' ? 'bg-success' : 'bg-secondary'}`}
                        style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '10px auto' }}
                    ></div>

                </div>

            </div>
        </div>

    );
}

export default Traffic_light;