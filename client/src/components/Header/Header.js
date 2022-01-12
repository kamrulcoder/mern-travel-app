import React from 'react';
import "./header.scss"
const Header = ({ currentUsername }) => {
    return (
        <div className='header'>
            <p className='menu-title' data-item='Travel App'>Travel </p>

        </div>
    );
};

export default Header;