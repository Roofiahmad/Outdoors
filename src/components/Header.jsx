import React from 'react'
import logoWhite from '../assets/img/logo-white.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img className="header__logo" src={logoWhite} alt="logo"/>
            </div>
            <div className="header__text-box">
            <h1 className="heading-primary"> 
                <span className="heading-primary--main">outdoors</span>
                <span className="heading-primary--sub">is where Life happens</span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">Discover Our Tours</a>
            </div>
        </header>
    )
}
