import React, { Component } from 'react';
import Header from '../components/header';
import Slider from '../components/slider';
import Services from '../components/services';
import Footer from '../components/footer';
import Products from '../components/products';
import About from '../components/about';
import Contacto from '../components/contacto';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <About />
                <Services />
                <Products />
                <Contacto />
                <Footer />
            </div>
        );
    }
}