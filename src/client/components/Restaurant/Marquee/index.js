'use strict'

// Node Modules
import React from 'react'

export default class Marquee extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            title: props.title,
            style: props.style,
            tagline: props.tagline
        }
    }

    render() {
        const { style, tagline, title } = this.state;
        return(<header className={ "marquee--" + style }><div className="wrapper">
            <h1>{ title }</h1>
            <p className="tag-line">{ tagline }</p>
            { style === 'jumbo' && <ScrollToElement target="#scroll-target" /> }
        </div></header>);
    }
}