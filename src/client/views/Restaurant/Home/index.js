'use strict'

// Node Modules
import React from 'react'

// Source > Client > Components > Project
import Navigation from '../../../components/Restaurant/Navigation'
import Marquee from '../../../components/Restaurant/Marquee'
import Footer from '../../../components/Restaurant/Footer'

export default class Home extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (<div className={ [ 'page', 'page-front' ].join( ' ' ) }>
            <Navigation navigation={ this.props.navigation } activeID={ null } />
            <main className="content" id="content">
                <Marquee title={ 'Damn Good Tacos' } tagline={ 'the Vegan Nom' } style={ 'jumbo' } target="#scroll-target" />
                <section className="content-body">
                    <section className="columns-1 text-center" id="scroll-target">
                        <div className="col-content">
                            <h2 className="h2">Our Roots</h2>
                            <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
                            <a href="/restaurant/about" className="btn btn-default" rel="bookmark">Learn About Our History</a>
                        </div>
                    </section>
                    <div className="divider-img divider-img--one" aria-hidden="true"></div>
                    <section className="columns-1 text-center">
                        <div className="col">
                            <h2 className="h2">Tacos Made Fresh Everyday</h2>
                        </div>
                        <div className="col">
                            <div className="columns-3">
                                <div className="col">
                                    <img src="/static/restaurant-imgs/taco-coloring-page-black-and-white-for-kids-2.jpg" alt="taco image drawing" className="img-responsive" />
                                    <h3 className="h4">Breakfast</h3>
                                </div>
                                <div className="col">
                                    <img src="/static/restaurant-imgs/crispy-taco-coloring-page-line-art-2.jpg" alt="taco image drawing" className="img-responsive" />
                                    <h3 className="h4">Signature</h3>
                                </div>
                                <div className="col">
                                    <img src="/static/restaurant-imgs/nachos-cheese-dish-vector-illustration-1523762-2.jpg" alt="chips and dip image drawing" className="img-responsive" />
                                    <h3 className="h4">Snacks</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <a href="/restaurant/menu" className="btn btn-default" rel="bookmark">Check Out Our Menu</a>
                        </div>
                    </section>
                    <div className="divider-img divider-img--two" aria-hidden="true"></div>
                    <section className="columns-3">
                        <div className="col">
                            <h2 className="h3">Locations</h2>
                            <p>Two locations in the Austin area open Tuesday through Sunday from 8 am to 8 pm.</p>
                            <a href="/restaurant/locations" rel="bookmark" className="btn btn-default">Learn More</a>
                        </div>
                        <div className="col">
                            <h2 className="h3">We Cater</h2>
                            <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth.</p>
                            <a href="/restaurant/catering" rel="bookmark" className="btn btn-default">Learn More</a>
                        </div>
                        <div className="col">
                            <h2 className="h3">Have a Question</h2>
                            <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth.</p>
                            <a href="/restaurant/contact" rel="bookmark" className="btn btn-default">Learn More</a>
                        </div>
                    </section>
                </section>
            </main>
            <Footer />
        </div>);
    }
}
