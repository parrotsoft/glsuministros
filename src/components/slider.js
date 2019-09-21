import React, { Component } from 'react';
import './styles.css';

export default class Slider extends Component {
    render() {
        return (
            <div className="tv-slider-container">
                <div className="tv-slider tv-slider-one">
                    <div className="owl-carousel owl-loaded owl-drag">
                        <article className="tv-slider-item">
                            <div className="tv-slider-img slider1" >
                                <div className="tv-slider-content">
                                    <div className="tv-slider-content-inner">
                                        <h2 className="tv-highlight-text"><span>Distribuidora</span> de equipos del Caribe</h2>
                                        <p className="tv-slider-para">Somos una compañía dedicada a la producción y comercialización de prendas de dotación empresarial e industrial y elementos de protección individual, buscamos ser un proveedor de alta confiabilidad.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="tv-slider-item slider2">
                            <div className="tv-slider-img">
                                <div className="tv-slider-content">
                                    <div className="tv-slider-content-inner">
                                        <h2 className="tv-highlight-text"><span>Suministramos</span> elementos de protección personal</h2>
                                        <p className="tv-slider-para">Dotar de Protección Personal adecuada a sus trabajadores mantiene su compañía segura y rentable.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="tv-slider-item slider3">
                            <div className="tv-slider-img">
                                <div className="tv-slider-content">
                                    <div className="tv-slider-content-inner">
                                        <h2 className="tv-highlight-text"><span>Licitaciones</span> Publicas y Privadas</h2>
                                        <p className="tv-slider-para">Contamos con la experiencia para proveer de productos y servicios participando en licitaciones publicas y privadas.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}