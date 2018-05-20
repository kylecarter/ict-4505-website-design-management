'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

// Src > Components
import Navigation from '../../../components/Restaurant/Navigation'
import Footer from '../../../components/Restaurant/Footer'
import Selectlist from '../../../components/Fields/Selectlist'
import Textfield from '../../../components/Fields/Textfield'
import ScrollToElement from '../../../components/ScrollToElement'

const _ = underscore;
export default class Styleguide extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render () {
    const { activeID, expose, navigation } = this.state;
    return (<div className="restaurant-styleguide">
      <section className="restaurant-styleguide--section__nav">
        <Navigation navigation={ navigation } activeID={ '' } />
      </section>
      <header className="restaurant-styleguide--heading restaurant-styleguide--section"><div className="wrapper">
        <h1 className="page-title"> Styleguide </h1>
      </div></header>
      <section className="restaurant-styleguide--section__swatches"><div className="wrapper">
        <h2>Colors</h2>
        <ul className="list-swatches">
          <li className="swatch primary">
            <span className="sr-only">#5a76c0</span>
          </li>
          <li className="swatch text-color">
            <span className="sr-only">#26252b</span>
          </li>
          <li className="swatch white">
            <span className="sr-only">#ffffff</span>
          </li>
        </ul>
      </div></section>
      <section className="restaurant-styleguide--section__headings">
      <h2 className="container">Headings</h2>
      <div className="wrapper">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p className="h1">.h1</p>
        <p className="h2">.h2</p>
        <p className="h3">.h3</p>
        <p className="h4">.h4</p>
        <p className="h4">.h4</p>
        <p className="h5">.h5</p>
        <p className="h6">.h6</p>
      </div></section>
      <section className="restaurant-styleguide--section__copy"><div className="wrapper">
        <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
        <ul>
          <li>list item</li>
          <li>list item</li>
          <li>list item</li>
        </ul>
        <ol>
          <li>list item</li>
          <li>list item</li>
          <li>list item</li>
        </ol>
      </div></section>
      <section className="restaurant-styleguide--section__forms">
        <form action="" className="wrapper">
          <div className="form-content">
            <div className="form-row form-textfield">
              <input type="text" id="example-textfield" className="form-control" required />
              <label htmlFor="example-textfield" className="required">Example Textfield</label>
            </div>
            <div className="form-row form-textarea">
              <label htmlFor="example-textarea">Example Textarea</label>
              <textarea name="" id="example-textarea" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="form-row form-checkbox">
              <input type="checkbox" className="form-control" id="example-checkbox"/>
              <label htmlFor="example-checkbox">Example Checkbox</label>
            </div>
            <div className="form-row form-radio">
              <input type="radio" className="form-control" id="example-radio"/>
              <label htmlFor="example-radio">Example Radio</label>
            </div>
            <Selectlist id={ 'example-selectlist' } required={ false } options={[
              { value: 'opt-1', label: 'Option 1', selected: false },
              { value: 'opt-2', label: 'Option 2', selected: false },
              { value: 'opt-3', label: 'Option 3', selected: false },
            ]} />
          </div>
        </form>
      </section>
      <section className="restaurant-styleguide--section__marquees">
        <header className="marquee--standard"><div className="wrapper">
          <h1>Heading</h1>
          <p className="tag-line">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.</p>
        </div></header>
        <header className="marquee--jumbo"><div className="wrapper">
          <h1>Heading</h1>
          <p className="tag-line">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.</p>
          <ScrollToElement target="#scroll-target" />
        </div></header>
      </section>
      <section className="restaurant-styleguide--section__menu"></section>
      <section className="restaurant-styleguide--section__footer" id="scroll-target">
        <Footer />
      </section>
    </div>);
  }
}
