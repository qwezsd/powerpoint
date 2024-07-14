import React from 'react';
import WindowComponent from './WindowComponent';
import MenuComponent from './MenuComponent';

export default function WrapComponent (){
    return (
        <div id='wrap'>
            <WindowComponent />
            <MenuComponent />
        </div>
    );
};
