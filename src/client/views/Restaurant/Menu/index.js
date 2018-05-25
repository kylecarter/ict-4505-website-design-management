'use strict'

// Node Modules
import axios from 'axios'
import React from 'react'
import jQuery from 'jquery'
import underscore from 'underscore'

// Source > Client > Components > Project
import Navigation from '../../../components/Restaurant/Navigation'
import Marquee from '../../../components/Restaurant/Marquee'
import Footer from '../../../components/Restaurant/Footer'

// Source > Server
import to_dollars from '../../../../server/dollars-format'

const $ = jQuery;
const _ = underscore;

class ShowCart extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (<button className="btn btn-primary fas fa-shopping-basket" onClick={ this.props.view } onTouchEnd={ this.props.view }><span className="sr-only">View Order</span></button>);
    }
}

class Form extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props.dish );
    }

    static getDerivedStateFromProps( props, state ) {
        return _.extend( {}, props.dish );
    }

    render() {
        const { alt, addon, desc, id, img, price, title, upgrade } = this.state;
        return (<aside className="modal" role="dialog">
            <form action="" className="modal-content form-addtocart" role="document" onSubmit={ this.props.order }><div className="form-content">
                <h4 className="h4">{ title } <strong className="price">{ to_dollars( price ) }</strong></h4>
                <div className="form-row form-textfield">
                    <label htmlFor="qnty">Quanity</label>
                    <input type="number" name="qnty" id="qnty" defaultValue="1" />
                </div>
                { upgrade && <div className="form-row form-checkbox">
                    <input type="checkbox" name="upgrade" id="upgrade" defaultChecked={ false } />
                    <label htmlFor="upgrade">{ upgrade.desc } for { to_dollars( upgrade.cost ) }.</label>
                </div> }
                <input type="hidden" name="item" value={ id } />
                <input type="button" value="Cancel" className="btn btn-default" onClick={ this.props.cancel } onTouchEnd={ this.props.cancel } />
                <input type="submit" value="Add to Order" className="btn btn-primary" />
            </div></form>
        </aside>);
    }
}

class Dish extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props.dish );
    }

    static getDerivedStateFromProps( props, state ) {
        return _.extend( {}, props.dish );
    }

    render() {
        const { alt, addon, desc, id, img, price, title, upgrade } = this.state
        return (<div>
            { img && <figure className="img">
                <img className="img-responsive" src={ '/static/restaurant-imgs/' + img } alt={ alt } />
                <figcaption><p>{ alt } { to_dollars( price ) }</p></figcaption>
            </figure> }
            { !img && <figure className="img-placeholder" aria-hidden="true">
                <figcaption><p>I assure you it is delicious. { to_dollars( price ) }</p></figcaption>
            </figure> }
            <h2 className="h2">{ title } <strong className="price">{ to_dollars( price ) }</strong></h2>
            { desc && <p>{ desc }</p> }
            { upgrade && <p className="upgrade">{ upgrade.desc } for { to_dollars( upgrade.cost ) }.</p> }
            <button className="btn btn-primary" data-id={ id } onClick={ this.props.handler } onTouchEnd={ this.props.handler }>Add to Order</button>
        </div>);
    }
}

export default class Menu extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
        this.expand = this.expand.bind( this );
        this.cancel = this.cancel.bind( this );
        this.order = this.order.bind( this );
        this.show = this.show.bind( this );
        this.form = this.form.bind( this );
        this.view = this.view.bind( this );
    }

    componentDidMount() {
        let self = this;
        axios.get( '/static/db/menu.json' ).then( resp => {
            self.setState({
                menu: resp.data.menu
            });
        }).catch( err => console.log( err ) );
    }

    render() {
        const { addToCart, bag, dish, menu } = this.state;
        return (<div className={ [ 'page', 'page-menu' ].join( ' ' ) }>
            <Navigation navigation={ this.props.navigation } activeID={ 'menu' } />
            <main className="content" id="content">
                <Marquee title={ 'Menu' } tagline={ 'Tacos for your soul' } style={ 'standard' } />
                <section className="content-body"><div className="container">
                    <nav aria-controls="menu" className="menu">
                        <ul className="list-menu" id="menu">
                            <li>
                                <h2 className="h4"><a href="#menu-group1" aria-controls="mneu-group1" onClick={ this.expand } onTouchEnd={ this.expand }>Snacks</a></h2>
                                <ul className="list-unstyled">
                                    <li><a href="/restaurant/menu/1" onClick={ this.show } onTouchEnd={ this.show } aria-controls="dish">Chis &amp; Guac</a></li>
                                    <li><a href="/restaurant/menu/2" onClick={ this.show } onTouchEnd={ this.show } aria-controls="dish">Vegan Mudd</a></li>
                                    <li><a href="/restaurant/menu/3" onClick={ this.show } onTouchEnd={ this.show } aria-controls="dish">Hella Vegan Quesadilla</a></li>
                                </ul>
                            </li>
                            <li>
                                <h2 className="h4"><a href="#menu-group2" aria-controls="mneu-group2" onClick={ this.expand } onTouchEnd={ this.expand }>Breakfast</a></h2>
                                <ul className="list-unstyled">
                                    <li><a href="/restaurant/menu/4" onClick={ this.show } onTouchEnd={ this.show } aria-controls="dish">Rockin' Vegan Migas</a></li>
                                    <li><a href="/restaurant/menu/5" onClick={ this.show } onTouchEnd={ this.show } aria-controls="dish">Three Amigos</a></li>
                                    <li><a href="/restaurant/menu/6" onClick={ this.show } onTouchEnd={ this.show } aria-controls="dish">El Nopal</a></li>
                                </ul>
                            </li>
                            <li>
                                <h2 className="h4"><a href="#menu-group3" aria-controls="mneu-group3" onClick={ this.expand } onTouchEnd={ this.expand }>Signature</a></h2>
                                <ul className="list-unstyled">
                                    <li><a href="/restaurant/menu/7" onClick={ this.show } onTouchEnd={ this.show } aria-controls="dish">Bridie Sanders Buf' Chkn</a></li>
                                    <li><a href="/restaurant/menu/8" onClick={ this.show } onTouchEnd={ this.show } aria-controls="dish">Tacos Al Pastor</a></li>
                                    <li><a href="/restaurant/menu/9" onClick={ this.show } onTouchEnd={ this.show } aria-controls="dish">Bean Diablo</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <section className="menu-item" id="dish">
                        { dish && <Dish dish={ dish } handler={ this.form } /> }
                        { !dish && <div>
                            <h2>the Vegan Nom Menu</h2>
                            <p>Use the navigation the left to view menu items and add them to your cart.</p>
                            <figure className="img-placeholder" aria-hidden="true">
                                <figcaption><p>Remember your alt text</p></figcaption>
                            </figure>
                        </div>}
                    </section>
                </div></section>
                { addToCart && <Form dish={ dish } order={ this.order } cancel={ this.cancel } /> }
                { bag && <ShowCart view={ this.view } /> }
            </main>
            <Footer />
        </div>);
    }

    expand( e ) {
        e.preventDefault();
        $( '.expanded' ).removeClass( 'expanded' );
        $( e.target ).parents( 'li' ).addClass( 'expanded' );
        return this;
    }

    show( e ) {
        e.preventDefault();
        this.setState({
            dish: this.state.menu[ parseInt( e.target.getAttribute( 'href' ).replace( /^.+?\/([0-9]+)$/, '$1' ) ) - 1 ]
        })
        return this;
    }

    cancel( e ) {
        e.preventDefault();
        this.setState({
            addToCart: false
        });
        return this;
    }

    order( e ) {
        e.preventDefault();
        const order = (()=> {
            const data = $( e.target ).serializeArray();
            let fields = {};
            $.each( data, ( i, e )=> {
                if ( e.name ) fields[ e.name ] = e.value;
            });
            return fields;
        })();
        if ( _.isArray( this.state.bag ) ) {
            let bag = this.state.bag;
            bag.push( order );
            this.setState({
                bag: bag,
                addToCart: false
            });
        } else {
            this.setState({
                bag: [ order ],
                addToCart: false
            })
        }
        return this;
    }

    view( e ) {
        e.preventDefault();
        console.log( this.state.bag );
        return this;
    }

    form( e ) {
        e.preventDefault();
        this.setState({
            addToCart: true,
        })
        return this;
    }
}