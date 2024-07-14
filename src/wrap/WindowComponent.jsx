import React from 'react';
import './sass/window.scss'

export default function windowComponent () {
    return (
        <div id='window'>
            <div className="container">
                <div className="title">
                    <span>Microsoft PowerPoint</span>
                    <div className="input-box"> 
                        <input type="text" placeholder='검색'/>
                    </div>
                </div>
            </div>
        </div>
    );
};