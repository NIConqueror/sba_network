import React from 'react';
import s from '../components/Header.module.css'
import logo from '../../src/logo.svg';

function Header() {
    return <header className={s.header}>
        <img src = {logo}></img>
            </header>
}

export default Header;