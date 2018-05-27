'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Textfield extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.defaults( _.clone( props ), {
      required: false
    });
  }

  render() {
    const { id, type, placeholder, label, required } = this.state;
    return(<div className="form-row form-textfield">
      <label htmlFor={ id } className={ required ? 'required' : '' }>{ label }</label>
      <input type={ type } className="form-control" defaultValue="" name={ id } id={ id } placeholder={ placeholder } required={ required }/>
    </div>)
  }

}
