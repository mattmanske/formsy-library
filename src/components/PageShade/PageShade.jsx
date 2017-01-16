//-----------  Imports  -----------//

import './styles.scss'

import React, { PropTypes } from 'react'
import cx                   from 'bem-classnames'

//-----------  Definitions  -----------//

const block = 'page-shade'

//-----------  Component  -----------//

const PageShade = (props) => {
  const blockCx = cx({
    name   : block,
    states : ['active']
  }, props, props.className)

  return (
    <div className={blockCx} style={props.style} onClick={props.onClick}></div>
  )
}

//-----------  Prop Types  -----------//

PageShade.propTypes = {
  active  : PropTypes.bool,
  onClick : PropTypes.func
}

PageShade.defaultProps = {
  active : false
}

//-----------  Export  -----------//

export default PageShade
