import React, { Component } from 'react';
import './header.component.style.css';
import logo from '../../../img/perm_identity-24px.svg'


class HeaderComponent extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo-wrapper">
                    <img src={logo} alt="logo"/>

                        <div className="logo-name">User Table</div>
                </div>
            </header>
        );
    }
}
export default HeaderComponent;