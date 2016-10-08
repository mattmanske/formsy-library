//-----------  Imports  -----------//

import React   from 'react'
import { HOC } from 'formsy-react'

import Notes   from './utils/Notes'
import Errors  from './utils/Errors'

//-----------  Class Setup  -----------//

class Textarea extends React.Component {

  static defaultProps = {
    autoComplete : 'on',
    disabled     : false,
    wrap         : 'soft'
  }

  static propTypes = {

    // Custom Props -----------//
    label              : React.PropTypes.string,
    notes              : React.PropTypes.string,

    // HTML Props  -----------//
    autoCapitalize     : React.PropTypes.oneOf(['characters', 'none', 'off', 'on', 'sentences', 'words']),
    autoComplete       : React.PropTypes.oneOf(['off', 'on']),
    autoFocus          : React.PropTypes.bool,
    className          : React.PropTypes.string,
    cols               : React.PropTypes.number,
    disabled           : React.PropTypes.bool,
    id                 : React.PropTypes.string,
    maxLength          : React.PropTypes.number,
    minLength          : React.PropTypes.number,
    name               : React.PropTypes.string.isRequired,
    placeholder        : React.PropTypes.string,
    readOnly           : React.PropTypes.bool,
    ref                : React.PropTypes.string,
    required           : React.PropTypes.bool,
    rows               : React.PropTypes.number,
    selectionDirection : React.PropTypes.oneOf(['forward', 'backward', 'none']),
    selectionEnd       : React.PropTypes.number,
    selectionStart     : React.PropTypes.number,
    spellCheck         : React.PropTypes.bool,
    wrap               : React.PropTypes.oneOf(['hard', 'soft']),

    // Formsy Props -----------//
    formNoValidate     : React.PropTypes.bool,
    getErrorMessage    : React.PropTypes.func,
    getErrorMessages   : React.PropTypes.func,
    getValue           : React.PropTypes.func.isRequired,
    hasValue           : React.PropTypes.func,
    isFormDisabled     : React.PropTypes.func,
    isFormSubmitted    : React.PropTypes.func,
    isPristine         : React.PropTypes.func,
    isRequired         : React.PropTypes.func,
    isValid            : React.PropTypes.func,
    isValidValue       : React.PropTypes.func,
    required           : React.PropTypes.bool,
    resetValue         : React.PropTypes.func,
    setValue           : React.PropTypes.func.isRequired,
    showError          : React.PropTypes.func,
    showRequired       : React.PropTypes.func,
    validate           : React.PropTypes.bool,
    validationError    : React.PropTypes.string,
    validationErrors   : React.PropTypes.object,
    validations        : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),
  }

  //-----------  Events  -----------//

  changeValue = (event) => {
    const value = event.currentTarget.value
    this.props.setValue(value)
  }

  //-----------  Render  -----------//

  render(){
    const { label, notes, setValidations, setValue, resetValue, getValue, hasValue, getErrorMessage, getErrorMessages, isFormDisabled, isValid, isPristine, isFormSubmitted, isRequired, showRequired, showError, isValidValue, validationError, validationErrors, ...htmlProps } = this.props
    
    return (
      <div>
        <label htmlFor={htmlProps.id}>
          {label}
          <textarea {...htmlProps}
            onChange={this.changeValue}
            value={this.props.getValue()}
          />
        </label>

        {notes && <small>{notes}</small>}
      </div>
    )
  }
}

//-----------  Export  -----------//

export default HOC(Textarea)
