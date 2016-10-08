//-----------  Imports  -----------//

import React  from 'react'
import Formsy from 'formsy-react'

//-----------  Class Setup  -----------//

class Form extends React.Component {

  state = {
    canSubmit    : false,
    globalErrors : null
  }

  //-----------  Formsy Validation Handlers  -----------//

  _enableSubmit = () => {
    this.setState({ canSubmit: true })
  }

  _disableSubmit = () => {
    this.setState({ canSubmit: false })
  }

  //-----------  HTML Element Render  -----------//

  render(){
    return (
      <Formsy.Form ref="formsy"
        mapping={this._mapInputs}
        onValid={this._enableSubmit}
        onInvalid={this._disableSubmit}
        onValidSubmit={this._onSubmit}
        >

        {this.props.children}

        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>

        <h4 className="label label-danger">{this.state.globalErrors}</h4>
      </Formsy.Form>
    )
  }
}

//-----------  Export  -----------//

export default Form
