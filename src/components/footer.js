import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="tv-section">
                <div className="tv-footer-content">
                    <div className="container">
                        <div className="row">
                            <div className="tv-address-content">
                                <div className="col-xs-12 col-sm-12 col-md-3">
                                    <div className="tv-contact-address-content">
                                        <div className="tv-contact-icon pull-left">
                                            <i className="fa fa-map-marker fa-lg"></i>
                                        </div>
                                        <div className="tv-contact-info">
                                            <p className="text-capitalize">Calle 40 #43-30.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="tv-contact-address-content">
                                        <div className="tv-contact-icon pull-left">
                                            <i className="fa fa-envelope fa-lg"></i>
                                        </div>
                                        <div className="tv-contact-info">
                                            <a href="mailto:demo@info.com" className="text-capitalize">info@glsuministrosyserviciosdelcaribe.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-3">
                                    <div className="tv-contact-address-content">
                                        <div className="tv-contact-icon pull-left">
                                            <i className="fa fa-phone fa-lg"></i>
                                        </div>
                                        <div className="tv-contact-info">
                                            <a href="tel:+1-202-555-0100" className="text-capitalize">300 404 505</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tv-footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="tv-copyright">
                                © 2019 Reservados todos los derechos.
                            <a href="http://www.parrotsoft.pro/" target="_blank">ParrotSoft.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}