//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import cx                   from 'bem-classnames'

//-----------  Definitions  -----------//

const block = 'loading-spinner'

//-----------  Component  -----------//

const LoadingSpinner = (props) => {
  const blockCx = cx({ name: block }, props, props.className)

  return (
    <svg
      fill={props.fill}
      className={blockCx}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle transform="translate(8 0)" cx="0" cy="16" r="0">
        <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
          keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
      </circle>
      <circle transform="translate(16 0)" cx="0" cy="16" r="0">
        <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
          keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
      </circle>
      <circle transform="translate(24 0)" cx="0" cy="16" r="0">
        <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
          keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
      </circle>
    </svg>
  )
}

//-----------  Prop Types  -----------//

LoadingSpinner.propTypes = {
  fill : PropTypes.string
}

LoadingSpinner.defaultProps = {
  fill : '#ffffff'
}

//-----------  Export  -----------//

export default LoadingSpinner
