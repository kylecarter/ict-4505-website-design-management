'use strict'

// Node Modules
import React from 'react'

// Source > Client > Components > Project
import Navigation from '../../../components/Restaurant/Navigation'
import Marquee from '../../../components/Restaurant/Marquee'
import Footer from '../../../components/Restaurant/Footer'

export default class Page extends React.Component {
    constructor( props ) {
        super( props );
        this.state = props.page ? {
            id: props.page.id,
            slug: props.page.slug,
            body: props.page.body,
            title: props.page.title,
            description: props.page.description
        } : {
            id: 404,
            slug: "fourohfour",
            title: '404, page not found',
            body: '<p>The page you are looking for could not be found.</p>',
        };
    }

    render() {
        const { body, description, id, slug, title } = this.state;
        return (<div className={ [ 'page', 'page-' + slug, 'page-id-' + id ].join( ' ' ) } id={ 'page-' + slug + '-' + id }>
            <Navigation navigation={ this.props.navigation } activeID={ slug } />
            <main className="content" id="content">
                <Marquee title={ title } tagline={ description } style={ slug === '' ? 'jumbo' : 'standard' } />
                <section className="content-body" dangerouslySetInnerHTML={{ __html: this.props.page.body }} />
            </main>
            <Footer />
        </div>);
    }
}
