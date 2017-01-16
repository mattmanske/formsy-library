//-----------  Imports  -----------//

import './styles.scss'

import React, { PropTypes } from 'react'
import cx                   from 'bem-classnames'

import BoundsWrapper        from '../BoundsWrapper'

//-----------  Definitions  -----------//

const block = 'page-section'

//-----------  Component  -----------//

const PageSection = (props) => {
  const blockCx = cx({ name: block }, props, props.className)
  const style = props.bgImage ? { backgroundImage: `url(${props.bgImage})` } : {}

  const content = (false == props.bounds) ? props.children : (
    <BoundsWrapper type={props.bounds}>
      {props.children}
    </BoundsWrapper>
  )

  return (
    <section className={blockCx} style={style}>
      {content}
    </section>
  )
}

//-----------  Prop Types  -----------//

PageSection.propTypes = {
  bounds    : PropTypes.oneOf(['block', 'compact', 'small', false]).isRequired,
  bgImage   : PropTypes.string,
  className : PropTypes.string,
  children  : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default PageSection
