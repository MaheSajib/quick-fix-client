import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <HeaderMenu></HeaderMenu>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;