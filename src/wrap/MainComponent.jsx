import React from 'react';
import './sass/main.scss'

export default function MainComponent () {
    return (
        <div id='main'>
            {/* 이 부분을 메인슬라이드로 */}
            {/* 왼쪽에 목록 있는 건 반응형처럼 만들어서 슬라이드 사이즈 줄어들 때마다 내용들 줄일 수 있게 하기 */}
            <div className="container">
                <div className="content">
                    <div className="slide">
                        <div className="box">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};