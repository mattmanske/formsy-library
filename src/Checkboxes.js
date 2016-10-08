//-----------  Imports  -----------//

import React    from 'react'
import { HOC }  from 'formsy-react'

import Checkbox from './Checkbox'
import Notes    from './utils/Notes'
import Errors   from './utils/Errors'

//-----------  Class Setup  -----------//

class Checkboxes extends React.Component {

  static defaultProps = {
    disabled      : false,
    prependLabels : false
  }

  static propTypes = {

    // Custom Props -----------//
    label            : React.PropTypes.string,
    name             : React.PropTypes.string,
    notes            : React.PropTypes.string,
    options          : React.PropTypes.array,
    prependLabels    : React.PropTypes.bool,
    ref              : React.PropTypes.string,

    // Formsy Props ----------- //
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
    const { notes, options, ...props } = this.props
    let checkboxElements = []

    if (options){
      checkboxElements = options.map((option, index) => {
        const { disabled, label, id, name, prependLabel, ref, ...htmlProps } = option

        return (
          <Checkbox {...htmlProps}
            label={label || option.value}
            name={name || `${props.name}`}
            key={index + label + option.value}
            disabled={disabled || props.disabled}
            id={id || `${props.name}[${option.value}]`}
            ref={ref || `${props.ref}[${option.value}]`}
            prependLabel={prependLabel || props.prependLabels}
          />
        )
      })
    }

    return (
      <div>
        {props.label}

        {checkboxElements}

        {notes && <small>{notes}</small>}
      </div>
    )
  }
}

//-----------  Export  -----------//

export default HOC(Checkboxes)
