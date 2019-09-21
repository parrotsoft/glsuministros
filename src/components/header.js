import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="tv-top-header tv-paddingTB-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="tv-site-logo">
                                    <a href="index.html">
                                        <img width="300" src="images/logo1.png" alt="logo"></img>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="tv-feature-content">
                                    <ul>
                                        <li>
                                            <h4 className="tv-checkmark">
                                                <span>Telefonos</span>
                                            </h4>
                                            <div className="tv-feature-text">300 404 505</div>
                                        </li>
                                        <li>
                                            <h4 className="tv-checkmark">
                                                <span>Correo</span>
                                            </h4>
                                            <div className="tv-feature-text">info@glsuministrosyserviciosdelcaribe.com</div>
                                        </li>
                                        <li>
                                            <h4 className="tv-checkmark">
                                                <span>Atención</span>
                                            </h4>
                                            <div className="tv-feature-text">Lun - Vie: 08:00AM - 06:00PM</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tv-main-nav">
                    <div className="container">
                        <nav className="navbar navbar-default">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="index.html"><i className="fa fa-home"></i></a></li>
                                    <li><a href="#nosotros">Nosotros</a></li>
                                    <li><a href="#servicios">Servicios</a></li>
                                    <li><a href="#productos">Productos</a></li>
                                    <li><a href="#contacto">Contacto</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}