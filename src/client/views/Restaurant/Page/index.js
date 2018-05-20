'use strict'

// Node Modules
import React from 'react'

// Source > Client > Components > Project
import Navigation from '../../../components/Restaurant/Navigation'
import Footer from '../../../components/Restaurant/Footer'

export default class About extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (<div className="project-view">
            <Navigation navigation={ this.props.navigation } />
            <main className="content" id="content">
                About
            </main>
            <Footer />
        </div>);
    }
}
