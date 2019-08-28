import React, { Component } from 'react';

export default class Products extends Component {
    render() {
        return (
            <section className="tv-section">
                <header className="tv-section-heading">
                    <h2 className="tv-section-title">Latest Projects Completed</h2>
                    <p className="tv-section-para">Duis vehicula neque velit, nec commodo purus imperdiet ac. Vestibulum a hendrerit neque. Suspendisse feugiat enim ligula, ac suscipit elit condimentum eget.</p>
                </header>
                <div className="tv-section-content">
                    <div className="container">
                        <div className="row">
                            <div className="tv-filter-wrapper col-xs-12 tv-marginB-50">
                                <div className="tv-projects-filter tv-filter-options">
                                    <a className="active" data-group="all">All Projects</a>
                                    <a data-group="interior">Interior</a>
                                    <a data-group="renovation">Renovation</a>
                                    <a data-group="architecture">Architecture</a>
                                    <a data-group="landscaping">Landscaping</a>
                                    <a data-group="gardening">Gardening</a>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <ul id="grid" className="tv-project-grid">
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["architecture"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/portfolio-item1.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                        <div className="tv-project-overlaytext">
                                            <div className="tv-project-midvalue">
                                                <span className="tv-porject-cat">Architecture</span>
                                                <span className="tv-project-name">New Office Room</span>
                                                <span className="tv-project-plus">
                                                    <a href="images/portfolio-item1.jpg" class="tv-plus example-image-link img-responsive" data-lightbox="project"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["architecture"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/portfolio-item2.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                        <div className="tv-project-overlaytext">
                                            <div className="tv-project-midvalue">
                                                <span className="tv-porject-cat">Architecture</span>
                                                <span className="tv-project-name">New Office Room</span>
                                                <span className="tv-project-plus">
                                                    <a href="images/portfolio-item2.jpg" className="tv-plus example-image-link img-responsive" data-lightbox="project"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["interior"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/portfolio-item3.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                        <div className="tv-project-overlaytext">
                                            <div className="tv-project-midvalue">
                                                <span className="tv-porject-cat">Interior</span>
                                                <span className="tv-project-name">New Office Room</span>
                                                <span className="tv-project-plus">
                                                    <a href="images/portfolio-item3.jpg" className="tv-plus example-image-link img-responsive" data-lightbox="project"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["landscaping"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/portfolio-item4.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                        <div className="tv-project-overlaytext">
                                            <div className="tv-project-midvalue">
                                                <span className="tv-porject-cat">Landscaping</span>
                                                <span className="tv-project-name">New Office Room</span>
                                                <span className="tv-project-plus">
                                                    <a href="images/portfolio-item4.jpg" className="tv-plus example-image-link img-responsive" data-lightbox="project"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["interior"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/portfolio-item5.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                        <div className="tv-project-overlaytext">
                                            <div className="tv-project-midvalue">
                                                <span className="tv-porject-cat">Interior</span>
                                                <span className="tv-project-name">New Office Room</span>
                                                <span className="tv-project-plus">
                                                    <a href="images/portfolio-item5.jpg" className="tv-plus example-image-link img-responsive" data-lightbox="project"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["renovation"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/portfolio-item6.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                        <div className="tv-project-overlaytext">
                                            <div className="tv-project-midvalue">
                                                <span className="tv-porject-cat">Renovation</span>
                                                <span className="tv-project-name">New Office Room</span>
                                                <span className="tv-project-plus">
                                                    <a href="images/portfolio-item6.jpg" className="tv-plus example-image-link img-responsive" data-lightbox="project"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["renovation"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/portfolio-item7.jpg" alt="project" class="img-responsive"></img>
                                        </div>
                                        <div className="tv-project-overlaytext">
                                            <div className="tv-project-midvalue">
                                                <span className="tv-porject-cat">Renovation</span>
                                                <span className="tv-project-name">New Office Room</span>
                                                <span className="tv-project-plus">
                                                    <a href="images/portfolio-item7.jpg" className="tv-plus example-image-link img-responsive" data-lightbox="project"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["gardening"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/portfolio-item8.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                        <div className="tv-project-overlaytext">
                                            <div className="tv-project-midvalue">
                                                <span className="tv-porject-cat">Gardening</span>
                                                <span className="tv-project-name">New Office Room</span>
                                                <span className="tv-project-plus">
                                                    <a href="images/portfolio-item8.jpg" className="tv-plus example-image-link img-responsive" data-lightbox="project"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item grid-item col-md-4 col-sm-6 col-xs-6 width-100" data-groups='["interior"]'>
                                    <div className="tv-project-content">
                                        <div className="tv-project-image">
                                            <img src="images/portfolio-item9.jpg" alt="project" className="img-responsive"></img>
                                        </div>
                                        <div className="tv-project-overlaytext">
                                            <div className="tv-project-midvalue">
                                                <span className="tv-porject-cat">Interior</span>
                                                <span className="tv-project-name">New Office Room</span>
                                                <span className="tv-project-plus">
                                                    <a href="images/portfolio-item9.jpg" className="tv-plus example-image-link img-responsive" data-lightbox="project"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                </span>
                                            </div>
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