//-----------  Imports  -----------//

import './styles.scss'

import React, { PropTypes } from 'react'
import cx                   from 'bem-classnames'

//-----------  Definitions  -----------//

const block = 'bounds-wrapper'

//-----------  Component  -----------//

const BoundsWrapper = (props) => {
  const blockCx = cx({
    name      : block,
    modifiers : ['type']
  }, props, props.className)

  return (
    <div className={blockCx}>
      {props.children}
    </div>
  )
}

//-----------  Prop Types  -----------//

BoundsWrapper.propTypes = {
  type     : PropTypes.oneOf(['block', 'compact', 'small']),
  children : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default BoundsWrapper
