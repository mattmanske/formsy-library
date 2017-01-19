//-----------  Imports  -----------//

import { connect } from 'react-redux'

import DemoForm    from './DemoForm'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => ({})

const mapDispatch = (dispatch) => ({
  onSubmit(formData){
    return new Promise((resolve, reject) => setTimeout(() => resolve(formData), 1500))
  },
  onSubmitSuccess: (formData) => {
    console.log('Submitted:', formData)
  }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(DemoForm)
