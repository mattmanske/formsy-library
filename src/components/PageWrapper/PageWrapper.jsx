//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import cx                   from 'bem-classnames'

//-----------  Definitions  -----------//

const block = 'page-wrapper'

//-----------  Component  -----------//

class PageWrapper extends React.Component {

  componentDidMount(){
    document.title = (this.props.pageTitle) ? `${this.props.pageTitle} | Rexsi` : 'Rexsi'
  }

  //-----------  HTML Render  -----------//

  render(){
    const { ...props } = this.props
    const blockCx = cx({ name: block }, props, props.className)

    return (
      <main className={blockCx}>
        {props.children}
      </main>
    )
  }
}

//-----------  Prop Types  -----------//

PageWrapper.propTypes = {
  title : PropTypes.string
}

//-----------  Export  -----------//

export default PageWrapper
