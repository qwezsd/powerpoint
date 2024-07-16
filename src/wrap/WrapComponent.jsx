import React from 'react';
import WindowComponent from './WindowComponent';
import HeaderComponent from './HeaderComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FooterComponent';

export default function WrapComponent (){
    return (
        <div id='wrap'>
            <WindowComponent />
            <HeaderComponent />
            <MenuComponent />
            <FooterComponent />
        </div>
    );
};
