//-----------  Imports  -----------//

import React   from 'react'
import { HOC } from 'formsy-react'

import Notes   from './utils/Notes'
import Errors  from './utils/Errors'

//-----------  Class Setup  -----------//

class Input extends React.Component {

  static defaultProps = {
    autoComplete : 'on',
    disabled     : false,
    type         : 'text'
  }

  static propTypes = {

    // Custom Props -----------//
    label              : React.PropTypes.string,
    notes              : React.PropTypes.string,

    // HTML Props -----------   //
    autoCapitalize     : React.PropTypes.oneOf(['characters', 'none', 'off', 'on', 'sentences', 'words']),
    autoComplete       : React.PropTypes.oneOf(['additional-name', 'address-level1', 'address-level2', 'address-level3','address-level4', 'address-line1', 'address-line2', 'address-line3', 'bday-day', 'bday-month', 'bday-year', 'bday', 'cc-additional-name', 'cc-csc', 'cc-exp-month', 'cc-exp-year', 'cc-exp', 'cc-family-name', 'cc-given-name', 'cc-name', 'cc-number', 'cc-type', 'country-name', 'country', 'current-password', 'family-name', 'given-name', 'honorific-prefix', 'honorific-suffix', 'language', 'name', 'new-password', 'nickname', 'off', 'on', 'organization-title', 'organization', 'photo', 'postal-code', 'sex', 'street-address', 'transaction-amount', 'transaction-currency', 'url', 'username']),
    autoCorrect        : React.PropTypes.oneOf(['off', 'on']),
    autoFocus          : React.PropTypes.bool,
    className          : React.PropTypes.string,
    disabled           : React.PropTypes.bool,
    id                 : React.PropTypes.string,
    inputMode          : React.PropTypes.oneOf(['email', 'full-width-latin', 'kana', 'katakana', 'latin', 'latin-name', 'latin-prose', 'numeric', 'tel', 'url', 'verbatim']),
    list               : React.PropTypes.string,
    max                : React.PropTypes.string,
    maxLength          : React.PropTypes.number,
    minLength          : React.PropTypes.number,
    name               : React.PropTypes.string.isRequired,
    pattern            : React.PropTypes.any,
    placeholder        : React.PropTypes.string,
    readOnly           : React.PropTypes.bool,
    ref                : React.PropTypes.string,
    required           : React.PropTypes.bool,
    selectionDirection : React.PropTypes.oneOf(['forward', 'backward', 'none']),
    size               : React.PropTypes.number,
    spellCheck         : React.PropTypes.bool,
    step               : React.PropTypes.number,
    tabIndex           : React.PropTypes.number,
    type               : React.PropTypes.oneOf(['color', 'date', 'datetime', 'datetime-local', 'email', 'hidden', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week']),
    value              : React.PropTypes.any,

    // Formsy Props ----------- //
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
          <input {...htmlProps}
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

export default HOC(Input)
