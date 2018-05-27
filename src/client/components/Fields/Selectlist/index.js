'use strict'

// Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

const Option = ( option, idx )=> <option key={ 'react.option.' + idx } value={ option.value }>{ option.label }</option>

export default class SelectList extends React.Component {
  constructor( props ) {
    super( props );
    this.state = _.defaults( _.clone( props ), {
      required: false
    });

    this.default = this.default.bind( this );
    this.toggle = this.toggle.bind( this );
  }

  render() {
    const { id, options, required } = this.state;
    const i = this.default( this.props.options );
    let x = this.default( options );
    return(<div className="form-row form-selectlist">
      <label htmlFor="example-selectlist" className={ required ? 'required' : '' }>Example Select</label>
      <select id={ id } className="form-control" defaultValue={ i > -1 ? options[ i ].value : '' } onChange={ this.toggle }>
        <option value="" disabled="disabled">Select an available option...</option>
        { options.map( Option ) }
      </select>
      <strong className="faux-select">{ x > -1 ? options[ x ].label : 'Select an available option...' }</strong>
    </div>)
  }

  toggle( e ) {
    const i = _.findIndex( this.props.options, { value: e.target.value } );
    let updates = this.state.options;
    _.each( updates, e => e.selected = false );
    if ( i > -1 ) {
      updates[ i ].selected = true;
    }
    return this.setState({ options: updates });
  }

  default( options ) {
    return _.findIndex( options, { selected: true } );
  }
}
