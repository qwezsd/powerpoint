import React from 'react';
import './sass/header.scss'

export default function HeaderComponent () {
    return (
        <div id='header'>
            <div className="container">
                <div className="content">
                    <ul>
                        <li>붙여넣기</li>
                        <li>뒤로가기</li>
                        <li>새 슬라이드 추가</li>
                        <li>폰트 키우기</li>
                        <li>폰트 줄이기</li>
                        <li>폰트 색</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
