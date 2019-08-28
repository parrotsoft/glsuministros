import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="tv-section">
                <div className="tv-footer-content">
                    <div className="container">
                        <div className="row">
                            <div className="tv-address-content">
                                <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="tv-contact-address-content">
                                        <div className="tv-contact-icon pull-left">
                                            <i className="fa fa-map-marker fa-lg"></i>
                                        </div>
                                        <div className="tv-contact-info">
                                            <p className="text-capitalize">visit us</p>
                                            <p className="text-capitalize">Old York Drive Richmond USA.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="tv-contact-address-content">
                                        <div className="tv-contact-icon pull-left">
                                            <i className="fa fa-envelope fa-lg"></i>
                                        </div>
                                        <div className="tv-contact-info">
                                            <p className="text-capitalize">Email Us</p>
                                            <a href="mailto:demo@info.com" className="text-capitalize">demo@info.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="tv-contact-address-content">
                                        <div className="tv-contact-icon pull-left">
                                            <i className="fa fa-phone fa-lg"></i>
                                        </div>
                                        <div className="tv-contact-info">
                                            <p className="text-capitalize">Call Us</p>
                                            <a href="tel:+1-202-555-0100" className="text-capitalize">1-202-555-0100</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="tv-footer-social">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="tv-website-socialinfo pull-left text-capitalize pull-none-xs">
                                        <p>
                                            follow us
                                        <br />
                                            on social networks
                                    </p>
                                    </div>
                                    <div className="tv-website-socialicon pull-right text-right pull-none-xs">
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-pinterest"></i>
                                            <i className="fa fa-pinterest"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-flickr"></i>
                                            <i className="fa fa-flickr"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-rss"></i>
                                            <i className="fa fa-rss"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="tv-subscribe-info pull-left text-capitalize pull-none-xs">
                                        <p>
                                            subscribe
                                        <br />
                                            on our newsletter
                                    </p>
                                    </div>
                                    <div className="tv-subscribe-form pull-right text-right">
                                        <form>
                                            <div className="input-group">
                                                <input className="form-control" type="text" placeholder="Type Your Email Account" />
                                                <span className="input-group-btn">
                                                    <button className="btn text-capitalize" type="button">join</button>
                                                </span>
                                            </div>
                                        </form>
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
                                © 2017 All right reserved. Designed by
                            <a href="http://www.themevault.net/" target="_blank">ThemeVault.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}