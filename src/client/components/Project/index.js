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
    const { body, description, files, id, tags, title, viewMode } = this.state;
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
          </div></header>
          { body && <section className="project-body" dangerouslySetInnerHTML={{ __html: body }} />}
          <div className="three-up-icon-txt">
            <div className="icon-txt">
              <div className="icon"><span className="fa fa-area-chart"></span></div>
              <div className="txt"><h4>Lorem Ipsum</h4><p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p></div>
            </div>
            <div className="icon-txt">
              <div className="icon"><span className="fa fa-area-chart"></span></div>
              <div className="txt"><h4>Lorem Ipsum</h4><p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p></div>
            </div>
            <div className="icon-txt">
              <div className="icon"><span className="fa fa-area-chart"></span></div>
              <div className="txt"><h4>Lorem Ipsum</h4><p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p></div>
            </div>
            <div className="icon-txt">
              <div className="icon"><span className="fa fa-area-chart"></span></div>
              <div className="txt"><h4>Lorem Ipsum</h4><p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p></div>
            </div>
            <div className="icon-txt">
              <div className="icon"><span className="fa fa-area-chart"></span></div>
              <div className="txt"><h4>Lorem Ipsum</h4><p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p></div>
            </div>
            <div className="icon-txt">
              <div className="icon"><span className="fa fa-area-chart"></span></div>
              <div className="txt"><h4>Lorem Ipsum</h4><p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p></div>
            </div>
          </div>
          <div className="split-image-txt"><div className="wrapper">
            <div className="split-image-txt-img">
              <h3>Lorem Pixel</h3>
            </div>
            <div className="split-image-txt-copy">
              <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
            </div>
          </div></div>
          <footer className="project-files">
            { files && <h2>Project Files</h2> }
            { files && <ul className="list-unstyled list-files">{ files.map( ( file, index )=> <File key={ 'key.react.file.' + file.id + '.' + index } { ...file } /> ) }</ul>}
          </footer>
        </article>);
        break;
    }
  }
}
