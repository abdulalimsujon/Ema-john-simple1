import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (

        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/oders">Oders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">about</a>
            </div>
        </nav>



    );
};

export default Header;