'use strict'

// Node Modules
import React from 'react'

// Source > Client > Components > Fields
import { Textfield } from '../../Fields'

export default ()=> (<footer className="footer">
    <section className="footer-top"><div className="wrapper">
    <form action="" className="form-inline">
        <Textfield id="newsletter" type="email" placeholder="Email" label="Join Our Newsletter" required={ true } />
        <input type="submit" className="btn btn-default" value="Sign Up" />
    </form>
    <nav className="social">
        <h4 className="h4">Check Us Out</h4>
        <a href="" className="fab fa-facebook-f"><span className="sr-only">Facebook</span></a>
        <a href="" className="fab fa-twitter"><span className="sr-only">Twitter</span></a>
        <a href="" className="fab fa-instagram"><span className="sr-only">Instagram</span></a>
        <a href="" className="fab fa-yelp"><span className="sr-only">Yelp</span></a>
    </nav>
    </div></section>
    <section className="footer-bottom"><div className="wrapper">
    <div className="footer-disclaimer">
        <p>copyright 2081 the Vegan Nom</p>
        <p>Terms of Use | Privacy Policy</p>
    </div>
    <div className="footer-awards">
        <img src="/static/restaurant-imgs/best-of-austin-2017-gold.jpg" alt="Best in Austin" className="img-responsive" />
    </div>
    </div></section>
</footer>);