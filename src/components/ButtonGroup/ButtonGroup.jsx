//-----------  Imports  -----------//

import './styles.scss'

import React, { PropTypes } from 'react'
import cx                   from 'bem-classnames'

//-----------  Definitions  -----------//

const block = 'button-group'

//-----------  Component  -----------//

const ButtonGroup = (props) => {
  const blockCx = cx({ name: block }, props, props.className)

  return (
    <div className={blockCx}>
      {props.children}
    </div>
  )
}

//-----------  Prop Types  -----------//

ButtonGroup.propTypes = {
  children : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default ButtonGroup
