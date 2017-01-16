//-----------  Imports  -----------//

import './styles.scss'

import _                    from 'lodash'
import moment               from 'moment'

import React, { PropTypes } from 'react'
import cx                   from 'bem-classnames'

import MaskedInput          from 'react-text-mask'
import DatePicker           from 'react-datepicker'

// import { getType }          from '../../services/client'

//-----------  Definitions  -----------//

const block = 'input-wrapper'

//-----------  Component  -----------//

const InputWrapper = (field) => {
  const { input, meta, inputOpts, ...props } = field
  let inputBlock = ''

  const id           = props.id || `${props.name}[${props.value}]`
  const invalid      = !!(meta.touched && meta.error)
  const prefixed     = !!props.prefix
  const suffixed     = !!props.suffix
  const prependLabel = (props.prependLabel) || (!_.includes(['radio', 'checkbox'], props.type))

  if ('textarea' == props.type){
    inputBlock = (
      <textarea
        {...input}
        {...inputOpts}
        id={id}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
    )
  } else if ('date' == props.type){
    inputBlock = (
      <DatePicker
        {...input}
        autoComplete='off'
        dateForm='MM/DD/YYYY'
        minDate={inputOpts.min}
        maxDate={inputOpts.max}
        selected={input.value ? moment(input.value) : null}
      />
    )
  } else if ('select' == props.type){
    inputBlock = (
      <select
        {...input}
        {...inputOpts}
        id={id}
        type={props.type}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      >
        {props.children}
      </select>
    )
  } else if (_.has(inputOpts, 'mask')){
    inputBlock = (
      <MaskedInput
        {...input}
        {...inputOpts}
        id={id}
        type={props.type}
        placeholderChar={'\u2000'}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
    )
  } else {
    inputBlock = (
      <input
        {...input}
        {...inputOpts}
        id={id}
        type={props.type}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
    )
  }

  const blockCx = cx({
    name      : block,
    modifiers : ['type'],
    states    : ['invalid', 'errors', 'required', 'disabled', 'prefixed', 'suffixed']
  }, { invalid: invalid, prefixed: prefixed, suffixed: suffixed, ...props }, props.className)

  const labelCx    = `${block}__label`
  const notesCx    = `${block}__notes`
  const prefixCx   = `${block}__prefix`
  const suffixCx   = `${block}__suffix`
  const errorsCx   = `${block}__errors`
  const interiorCx = `${block}__interior`

  return (
    <div className={blockCx}>
      {prependLabel && props.label &&
        <label htmlFor={id} className={labelCx}>
          {props.label}{props.required && <sup>*</sup>}
        </label>
      }

      <div className={interiorCx}>
        {props.prefix &&
          <span className={prefixCx}>{props.prefix}</span>
        }

        {inputBlock}

        {props.inputIcon &&
          <i className='material-icons'>{props.inputIcon}</i>
        }

        {props.suffix && input.value &&
          <span className={suffixCx}>{props.suffix}</span>
        }

        <div className={errorsCx}>{meta.error || ' '}</div>
      </div>

      {!prependLabel && props.label &&
        <label htmlFor={id} className={labelCx}>
          {props.label}{props.required && <sup>*</sup>}
        </label>
      }

      {props.notes && <div className={notesCx}>{props.notes}</div>}
    </div>
  )
}

//-----------  Prop Types  -----------//

InputWrapper.propTypes = {
  type         : PropTypes.oneOf(['checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'hidden', 'month', 'number', 'password', 'radio', 'range', 'search', 'tel', 'text', 'textarea', 'time', 'url', 'week']),
  input        : PropTypes.object,
  disabled     : PropTypes.bool,
  required     : PropTypes.bool,
  placeholder  : PropTypes.string,
  notes        : PropTypes.node,
  label        : PropTypes.node,
  inputIcon    : PropTypes.string,
  prependLabel : PropTypes.bool
}

InputWrapper.defaultProps = {
  type         : 'text',
  input        : {},
  disabled     : false,
  required     : false,
  placeholder  : ''
}

//-----------  Export  -----------//

export default InputWrapper
