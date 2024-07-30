import React from 'react';
import './sass/main.scss'

export default function MainComponent () {
    return (
        <div id='main'>
            <div className="left-container">
                <div className="left-content">
                    <div className="left-slide">
                        <div className="left-box">
                            <div className="slide-box"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="right-content">
                    <div className="right-slide">
                        <div className="right-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};