import React from 'react';
import WindowComponent from './WindowComponent';
import HeaderComponent from './HeaderComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FooterComponent';
import MainComponent from './MainComponent';

export default function WrapComponent (){
    return (
        <div id='wrap'>
            <WindowComponent />
            <HeaderComponent />
            <MainComponent />
            <MenuComponent />
            <FooterComponent />
        </div>
    );
};
