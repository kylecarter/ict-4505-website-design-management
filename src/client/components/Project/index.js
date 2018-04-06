'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore

class Tag extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render () {
    const { term } = this.state;
    return (<li className={ 'lang-' + term.toLowerCase() }>{ term }</li>);
  }
}

class File extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render () {
    const { title, url } = this.state;
    return (<li><a className="ico" href={ url } rel="bookmark">{ title }</a></li>);
  }
}

export default class Project extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    const { body, description, files, id, tags, title, viewMode } = this.state;
    switch( true ) {
      case /^list$/gi.test( viewMode ):
        return (<li><div className="project">
          <h4>{ title }</h4>
          { description && <p>{ description }</p> }
          <a href={ '/project/' + id }>View Project</a>
          { tags && <ul className="list-inline list-tags">{ tags.map( ( term, index )=> <Tag key={ 'key.react.term.' + term.id + '.' + index } { ...term } /> ) }</ul>}
        </div></li>);
        break;
      default:
        return (<div className="project">
          <header className="project-header">
            <h1>{ title }</h1>
            { description && <p className="project-description">{ description }</p> }
            { tags && <ul className="list-inline list-tags">{ tags.map( ( term, index )=> <Tag key={ 'key.react.term.' + term.id + '.' + index } { ...term } /> ) }</ul>}
          </header>
          { body && <div className="project-body" dangerouslySetInnerHTML={{ __html: body }} />}
          { files && <h2>Project Files</h2> }
          { files && <ul className="list-unstyled list-files">{ files.map( ( file, index )=> <File key={ 'key.react.file.' + file.id + '.' + index } { ...file } /> ) }</ul>}
        </div>);
        break;
    }
  }
}
