import React  from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import BadgerLogo from './assets/images/BB.png'
import './assets/styles/Nav.css'

export default function Nav() {
    return (
<>
    <section className="global-nav">
                <img className="nav-logo"
                    src={BadgerLogo}
                    alt="Bronze Badger"/>
                <ul>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/blog/" >Blog</NavLink></li>
                    <li><NavLink to="/login/" >Login</NavLink></li> {/*ahoCoding: do we still need standalone page? Form is embedded in Landingpage*/}
                    <li><NavLink to="/register/" >Register</NavLink></li> {/*ahoCoding: do we still need standalone page? Form is embedded in Landingpage*/}
                    <li><NavLink to="/about/" >About</NavLink></li>
                </ul>
        </section>
</>
    )
}