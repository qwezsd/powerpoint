import React from 'react';
import './sass/footer.scss'

export default function FooterComponent () {
    return (
        <div id='footer'>
            <div className="container">
                <div className="content">
                    <div className="left">
                        <ul>
                            <li><span>슬라이드 1/1</span></li>
                            <li><span>대한민국(지역명)</span></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><span>메모(슬라이드 밑에 메모 생김)</span></li>
                            <li><span>왼쪽에 목록 보임</span></li>
                            <li><span>슬라이드만 보임</span></li>
                            <li><span>발표모드</span></li>
                            <li><span>-</span></li>
                            {/* 누르면 화면 zoom out */}
                            <li><span>긴막대</span></li>
                            <li><span>+</span></li>
                            {/* 누르면 화면 zoom in */}
                            <li><span>확대 기본형</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};