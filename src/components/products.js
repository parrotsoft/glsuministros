import React, { Component } from 'react';

export default class Products extends Component {
    render() {
        return (
            <section id="productos" className="tv-section">
                <header className="tv-section-heading">
                    <h2 className="tv-section-title">Productos</h2>
                    <p className="tv-section-para">Brindamos productos de alta calidad, teniendo como elemento clave la seguridad de sus trabajadores en los múltiples procesos industriales.</p>
                </header>
                <div className="tv-section-content">
                    <div className="container">
                        <div className="row">
                            <div className="tv-filter-wrapper col-xs-12 tv-marginB-50">
                                <div className="tv-projects-filter tv-filter-options">
                                    <a className="active" data-group="all">Todos los Productos</a>
                                    <a data-group="oficina">Oficina</a>
                                    <a data-group="muebles">Muebles</a>
                                    <a data-group="aseo_cafeteria">Aseo/Cafeteria</a>
                                    <a data-group="aires">Aires Acondicionados</a>
                                    <a data-group="seguridad">Seguridad Industrial</a>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <ul id="grid" className="tv-project-grid">
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["aseo_cafeteria"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/broom-1837434_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["aseo_cafeteria"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/kitchen-731351_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["oficina"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/printer-790396_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["aires"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/air-conditioner-3629396_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["aires"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/air-conditioning-233953_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["oficina"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/office-1078869_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["muebles"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/seminar-594118_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["muebles"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/wall-416060_640.jpg" alt="project" class="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["seguridad"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/chemist-1636375_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["seguridad"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/helmet-1636347_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["seguridad"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/helmet-1636344_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["seguridad"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/industrial-1636403_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["seguridad"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/welding-2178127_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["seguridad"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/tube-bender-2819137_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["seguridad"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/industrial-1636383_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["oficina"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/office-2009693_640.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}