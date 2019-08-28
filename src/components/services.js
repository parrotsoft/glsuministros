import React, { Component } from 'react';

export default class Services extends Component {
    render() {
        return (
            <section className="tv-section">
                <header className="tv-section-heading">
                    <h2 className="tv-section-title">service we provide</h2>
                    <p className="tv-section-para">Duis vehicula neque velit, nec commodo purus imperdiet ac. Vestibulum a hendrerit neque. Suspendisse feugiat enim ligula, ac suscipit elit condimentum eget.</p>
                </header>
                <div className="tv-section-content">
                    <div className="container">
                        <div className="row">
                            <div className="tv-services">
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="tv-service-content">
                                        <div className="tv-service-img">
                                            <img alt="service" src="images/service1-2.png"></img>
                                            <img alt="service" src="images/service1.png"></img>
                                        </div>
                                        <div className="tv-service-text">
                                            <h4>Tiling & Painting</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est purus, consequat vitae tincidunt vel, pharetra eu quam. Nulla facilisi. Etiam leo nisi, mollis vel leo eu, tincidunt tincidunt ex.</p>
                                            <a className="btn" href="">
                                                <span className="tv-mask"></span>
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="tv-service-content">
                                        <div className="tv-service-img">
                                            <img alt="service" src="images/service2-2.png"></img>
                                            <img alt="service" src="images/service2.png"></img>
                                        </div>
                                        <div className="tv-service-text">
                                            <h4>Renovations</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est purus, consequat vitae tincidunt vel, pharetra eu quam. Nulla facilisi. Etiam leo nisi, mollis vel leo eu, tincidunt tincidunt ex.</p>
                                            <a className="btn" href="">
                                                <span className="tv-mask"></span>
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="tv-service-content">
                                        <div className="tv-service-img">
                                            <img alt="service" src="images/service3-2.png"></img>
                                            <img alt="service" src="images/service3.png"></img>
                                        </div>
                                        <div className="tv-service-text">
                                            <h4>Design & Build</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est purus, consequat vitae tincidunt vel, pharetra eu quam. Nulla facilisi. Etiam leo nisi, mollis vel leo eu, tincidunt tincidunt ex.</p>
                                            <a className="btn" href="">
                                                <span className="tv-mask"></span>
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="tv-service-content">
                                        <div className="tv-service-img">
                                            <img alt="service" src="images/service4-2.png"></img>
                                            <img alt="service" src="images/service4.png"></img>
                                        </div>
                                        <div className="tv-service-text">
                                            <h4>Consulting</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est purus, consequat vitae tincidunt vel, pharetra eu quam. Nulla facilisi. Etiam leo nisi, mollis vel leo eu, tincidunt tincidunt ex.</p>
                                            <a className="btn" href="">
                                                <span className="tv-mask"></span>
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}