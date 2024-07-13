import React from 'react';
import HeaderComponent from './HeaderComponent';
import MenuComponent from './MenuComponent';

export default function WrapComponent (){
    return (
        <div id='wrap'>
            <HeaderComponent />
            <MenuComponent />
        </div>
    );
};
