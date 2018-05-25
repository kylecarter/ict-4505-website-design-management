'use strict'

// Node Modules
import React from 'react'

// Source > Client > Components
import ScrollToElement from '../../ScrollToElement'

export default class Marquee extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            title: props.title,
            style: props.style,
            tagline: props.tagline,
            target: props.target
        }
    }

    render() {
        const { style, tagline, target, title } = this.state;
        return(<header className={ "marquee--" + style }><div className="wrapper">
            <h1>{ title }</h1>
            <p className="tag-line">{ tagline }</p>
            { style === 'jumbo' && <ScrollToElement target={ target } /> }
        </div></header>);
    }
}