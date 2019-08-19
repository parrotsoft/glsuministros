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
                                        <h2 className="tv-highlight-text"><span>Perfection</span> is always under construction</h2>
                                        <p className="tv-slider-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet nisl nunc, at ultricies urna sollicitudin eu. In eget tortor ac turpis viverra finibus. Etiam eget iaculis leo. Aenean nisi lectus, varius nec convallis malesuada, vestibulum eget metus.</p>
                                    </div>
                                    <a href="" className="btn">
                                        <span className="tv-mask"></span>
                                        <span>View Our Solutions</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article className="tv-slider-item slider2">
                            <div className="tv-slider-img"> 
                                <div className="tv-slider-content">
                                    <div className="tv-slider-content-inner">
                                        <h2 className="tv-highlight-text"><span>Perfection</span> is always under construction</h2>
                                        <p className="tv-slider-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet nisl nunc, at ultricies urna sollicitudin eu. In eget tortor ac turpis viverra finibus. Etiam eget iaculis leo. Aenean nisi lectus, varius nec convallis malesuada, vestibulum eget metus.</p>
                                    </div>
                                    <a href="" className="btn">
                                        <span className="tv-mask"></span>
                                        <span>View Our Solutions</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
        </div>
        );
    }
}