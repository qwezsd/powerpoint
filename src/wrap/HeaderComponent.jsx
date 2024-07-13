import React from 'react';
import './sass/header.scss'

export default function HeaderComponent () {
    return (
        <div id='header'>
            <div className="container">
                <div className="title">
                    <span>Microsoft PowerPoint</span>
                    <div className="input-box"> 
                        <input type="text" placeholder='검색'/>
                        <img src="./img/icon/0d1058544686e78d80d0e2feb5f09c00.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};