import React from 'react';
import WindowComponent from './WindowComponent';
import HeaderComponent from './HeaderComponent';
import MenuComponent from './MenuComponent';

export default function WrapComponent (){
    return (
        <div id='wrap'>
            <WindowComponent />
            <HeaderComponent />
            <MenuComponent />
        </div>
    );
};
