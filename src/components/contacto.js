import React, { Component } from 'react';

export default class Contacto extends Component {
    render() {
        return (
            <section id="contacto" className="tv-section">
                <header className="tv-section-heading">
                    <h2 className="tv-section-title">Conectate con nosotros</h2>
                    <p className="tv-section-para">Envíenos un mensaje o llámenos para más información.</p>
                </header>
                <div className="tv-section-content">
                    <div className="container">
                        <div className="tv-contact-form">
                            <div className="row">
                                <div class="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <form id="tv-contact-form" method="post" action="">
                                            <div className="col-md-6">
                                                <input id="name" className="form-control" type="text" required="" placeholder="Nombre" name="contact-name" aria-required="true" />
                                        </div>
                                                <div className="col-md-6">
                                                    <input id="email" className="form-control" type="email" required="" placeholder="Correo" name="contact-email" aria-required="true" />
                                        </div>
                                                    <div className="col-md-6">
                                                        <input id="telephone" className="form-control" type="text" required="" placeholder="Telefono" name="contact-telephone" aria-required="true" />
                                        </div>
                                                        <div className="col-md-6">
                                                            <input id="subject" className="form-control" type="text" required="" placeholder="Asunto" name="contact-subject" aria-required="true" />
                                        </div>
                                                            <div className="col-md-12">
                                                                <textarea id="message" className="form-control" required="" placeholder="Mensaje" rows="2" name="contact-message" aria-required="true"></textarea>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <button id="submit-message" className="btn btn-primary btn-black btn-block" type="submit">
                                                                    <span className="tv-mask"></span>
                                                                    <span>Enviar Mensaje</span>
                                                                </button>
                                                            </div>
                                    </form>
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