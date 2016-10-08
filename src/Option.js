//-----------  Imports  -----------//

import React from 'react'

//-----------  Class Setup  -----------//

class Option extends React.Component {

  static defaultProps = {
    disabled: false
  }

  static propTypes = {

    // HTML Props -----------//
    disabled : React.PropTypes.bool,
    label    : React.PropTypes.string.isRequired,
    value    : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
  }

  //-----------  Render  -----------//

  render(){
    const { label, ...props } = this.props

    return (
      <option {...props} >
        {label}
      </option>
    )
  }
}

//-----------  Export  -----------//

export default Option
