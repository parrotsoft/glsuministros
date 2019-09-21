import React, { Component } from "react";

export default class Services extends Component {
    render() {
        return (
            <section id="servicios" className="tv-section">
                <header className="tv-section-heading">
                    <h2 className="tv-section-title">Nuestros Servicios</h2>
                    <p className="tv-section-para">
                        Como empresa de servicios profesionales líder en el mundo, sabemos
                        que el valor y la confianza son ingredientes importantes de una
                        relación de calidad. No importa lo grande que eres, pública o
                        privada, ni en qué industrias o sectores te especializas, podemos
                        ayudarte a trabajar en tus necesidades y alcanzar tus metas. Conoce
                        los servicios que ofrecemos, a continuación
          </p>
                </header>
                <div className="tv-section-content">
                    <div className="container">
                        <div className="row">
                            <div className="tv-services">
                                <div className="col-xs-12 col-md-3">
                                    <div className="thumbnail">
                                        <p>Distribuimos y comercializamos todo lo relacionado con equipos y muebles de oficina, sistemas, computadores e impresoras.</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-3">
                                    <div className="thumbnail">
                                        <p>Fabricamos toda clase de bienes muebles para uso doméstico, industrial y de oficina.</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-3">
                                    <div className="thumbnail">
                                        <p>Ofrecemos servicios de mantenimieno; instalación y reparación de equipos de computo.</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-3">
                                    <div className="thumbnail">
                                        <p>suministramos y comercializamos productos de aseo y cafetería.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="tv-services">
                                <div className="col-xs-12 col-md-3">
                                    <div className="thumbnail">
                                        <p>Distribuimos y comercializamos aires acondicionados; como también lo relacionado con los repuestos y partes de estos, además de mantenimiento, reparación e instalación de los mismos.</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-3">
                                    <div className="thumbnail">
                                        <p>Distribuir y comercializar toda clase de prenda de vestir, así como prendas de uso industrial.</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-3">
                                    <div className="thumbnail">
                                        <p>Podrá importar y exportar artículos y o elementos para su libre desarrollo de su actividad económica.</p>
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
