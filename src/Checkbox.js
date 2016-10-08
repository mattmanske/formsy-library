//-----------  Imports  -----------//

import React from 'react'

//-----------  Class Setup  -----------//

class Checkbox extends React.Component {

  static defaultProps = {
    prependLabel : false
  }

  static propTypes = {

    // Custom Props -----------//
    label          : React.PropTypes.string,
    prependLabel   : React.PropTypes.bool,

    // HTML Props ----------- //
    autoFocus      : React.PropTypes.bool,
    accesskey      : React.PropTypes.string,
    crop           : React.PropTypes.oneOf(['center', 'end', 'left', 'none', 'right', 'start']),
    className      : React.PropTypes.string,
    defaultChecked : React.PropTypes.bool,
    disabled       : React.PropTypes.bool,
    id             : React.PropTypes.string,
    name           : React.PropTypes.string.isRequired,
    required       : React.PropTypes.bool,
    src            : React.PropTypes.string,
    tabIndex       : React.PropTypes.number,
    value          : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
  }

  //-----------  Render  -----------//

  render(){
    const { label, prependLabel, ...htmlProps } = this.props

    return (
      <label htmlFor={htmlProps.id}>
        {prependLabel && label}
        <input type="checkbox" {...htmlProps} />
        {!prependLabel && label}
      </label>
    )
  }
}

//-----------  Export  -----------//

export default Checkbox
