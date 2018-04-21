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
    return (<li className=" 'lang-' + term.toLowerCase() ">{ term }</li>);
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
    const { body, description, files, id, landing_page, tags, title, viewMode } = this.state;
    switch( true ) {
      case /^list$/gi.test( viewMode ):
        return (<li><div className="project">
          <h4 className="project-title">{ title }</h4>
          { description && <p>{ description }</p> }
          <a href={ '/project/' + id }>View Project</a>
          { tags && <ul className="list-inline list-tags">{ tags.map( ( term, index )=> <Tag key={ 'key.react.term.' + term.id + '.' + index } { ...term } /> ) }</ul>}
        </div></li>);
        break;
      default:
        return (<article className="project">
          <header className="project-header"><div className="wrapper">
            <h1 className="h1 page-title">{ title }</h1>
            { description && <p className="project-description">{ description }</p> }
            { tags && <ul className="list-inline list-tags">{ tags.map( ( term, index )=> <Tag key={ 'key.react.term.' + term.id + '.' + index } { ...term } /> ) }</ul>}
            { landing_page && files &&
              <div className="project-files">
                <h2 className="h6">Project Files</h2>
                <ul className="list-unstyled list-files">{ files.map( ( file, index )=> <File key={ 'key.react.file.' + file.id + '.' + index } { ...file } /> ) }</ul>
              </div>
            }
          </div></header>
          { body && <section className="project-body" dangerouslySetInnerHTML={{ __html: body }} />}
          { !landing_page && files &&
            <footer className="project-files">
              <h2 className="h6">Project Files</h2>
              <ul className="list-unstyled list-files">{ files.map( ( file, index )=> <File key={ 'key.react.file.' + file.id + '.' + index } { ...file } /> ) }</ul>
            </footer>
          }
        </article>);
        break;
    }
  }
}
