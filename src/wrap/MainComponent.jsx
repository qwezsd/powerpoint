import React from 'react';
import './sass/main.scss'

export default function MainComponent () {
    return (
        <div id='main'>
            {/* 왼쪽에 목록 있는 건 반응형처럼 만들어서 슬라이드 사이즈 줄어들 때마다 내용들 줄일 수 있게 하기 */}
            <div className="left-container">
                <div className="left-content">
                    <div className="left-slide">
                        <div className="left-box">
                            
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