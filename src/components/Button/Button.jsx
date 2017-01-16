//-----------  Imports  -----------//

import './styles.scss'

import React, { PropTypes } from 'react'
import cx                   from 'bem-classnames'

import LoadingSpinner       from '../LoadingSpinner'

//-----------  Definitions  -----------//

const block = 'button'

//-----------  Component  -----------//

const Button = (props) => {
  const glyph = (props.icon && !props.children)

  const blockCx = cx({
    name      : block,
    modifiers : ['size', 'color'],
    states    : ['loading', 'disabled', 'glyph']
  }, { ...props, glyph }, props.className)

  const innerCx  = `${block}__inner`
  const loaderCx = `${block}__loader`

  return (
    <div className={blockCx} disabled={props.disabled || props.loading} onClick={props.onClick}>
      {props.icon && <i className="material-icons">{props.icon}</i>}
      {props.children && <span className={innerCx}>{props.children}</span>}
      {props.loading && <LoadingSpinner className={loaderCx} />}
    </div>
  )
}

//-----------  Prop Types  -----------//

Button.propTypes = {
  icon     : PropTypes.string,
  size     : PropTypes.oneOf(['lg', 'rg', 'sm']),
  color    : PropTypes.oneOf(['blue', 'dark-blue', 'gray', 'white']),
  loading  : PropTypes.bool,
  disabled : PropTypes.bool,
  onClick  : PropTypes.func,
}

Button.defaultProps = {
  size     : 'rg',
  color    : 'blue',
  loading  : false,
  disabled : false
}

//-----------  Export  -----------//

export default Button
