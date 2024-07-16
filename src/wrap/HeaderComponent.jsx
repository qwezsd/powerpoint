import React from 'react';
import './sass/header.scss'

export default function HeaderComponent () {
    return (
        <div id='header'>
            <div className="container">
                <div className="content">
                    <ul>
                        <li><h4>붙여넣기</h4></li>
                        <li><h4>뒤로가기</h4></li>
                        <li><h4>새 슬라이드 추가</h4></li>
                        <li><h4>폰트 키우기</h4></li>
                        <li><h4>폰트 줄이기</h4></li>
                        <li><h4>폰트색</h4></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
