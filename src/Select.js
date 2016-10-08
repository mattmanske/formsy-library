//-----------  Imports  -----------//

import React   from 'react'
import { HOC } from 'formsy-react'

import Option  from './Option'
import Notes   from './utils/Notes'
import Errors  from './utils/Errors'

//-----------  Class Setup  -----------//

class Select extends React.Component {

  static defaultProps = {
    allowNull : true,
    disabled  : false,
    multiple  : false
  }

  static propTypes = {

    // Custom Props -----------//
    allowNull        : React.PropTypes.bool,
    label            : React.PropTypes.string,
    notes            : React.PropTypes.string,
    options          : React.PropTypes.array,
    placeholder      : React.PropTypes.string,

    // HTML Props  -----------//
    autoFocus        : React.PropTypes.bool,
    className        : React.PropTypes.string,
    disabled         : React.PropTypes.bool,
    id               : React.PropTypes.string,
    multiple         : React.PropTypes.bool,
    name             : React.PropTypes.string.isRequired,
    ref              : React.PropTypes.string,
    required         : React.PropTypes.bool,
    selected         : React.PropTypes.bool,
    size             : React.PropTypes.number,

    // Formsy Props -----------//
    formNoValidate   : React.PropTypes.bool,
    getErrorMessage  : React.PropTypes.func,
    getErrorMessages : React.PropTypes.func,
    getValue         : React.PropTypes.func.isRequired,
    hasValue         : React.PropTypes.func,
    isFormDisabled   : React.PropTypes.func,
    isFormSubmitted  : React.PropTypes.func,
    isPristine       : React.PropTypes.func,
    isRequired       : React.PropTypes.func,
    isValid          : React.PropTypes.func,
    isValidValue     : React.PropTypes.func,
    required         : React.PropTypes.bool,
    resetValue       : React.PropTypes.func,
    setValue         : React.PropTypes.func.isRequired,
    showError        : React.PropTypes.func,
    showRequired     : React.PropTypes.func,
    validate         : React.PropTypes.bool,
    validationError  : React.PropTypes.string,
    validationErrors : React.PropTypes.object,
    validations      : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),
  }

  //-----------  Events  -----------//

  changeValue = (event) => {
    const value = event.currentTarget.value
    this.props.setValue(value)
  }

  //-----------  Render  -----------//

  render(){
    const { allowNull, label, notes, options, placeholder, setValidations, setValue, resetValue, getValue, hasValue, getErrorMessage, getErrorMessages, isFormDisabled, isValid, isPristine, isFormSubmitted, isRequired, showRequired, showError, isValidValue, validationError, validationErrors, ...htmlProps } = this.props
    let optionElements = []

    if (options)
      optionElements = options.map((option, index) => <Option key={index + option.label + option.value} {...option}></Option>)

    if (placeholder)
      optionElements.unshift(<Option key="null" value={null} label={placeholder} disabled={!allowNull}></Option>)

    return (
      <div>
        <label htmlFor={htmlProps.id}>
          {label}
          <select {...htmlProps}
            onChange={this.changeValue}
            value={this.props.getValue()}
          >
            {optionElements}
          </select>
        </label>

        {notes && <small>{notes}</small>}
      </div>
    )
  }
}

//-----------  Export  -----------//

export default HOC(Select)
