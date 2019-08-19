import React, { Component } from 'react';
import Header from '../components/header';
import Slider from '../components/slider';
import Services from '../components/services';
import Footer from '../components/footer';
import Products from '../components/products';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <Services />
                <Products />
                <Footer />
            </div>
        );
    }
}