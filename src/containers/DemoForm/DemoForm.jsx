//-----------  Imports  -----------//

import '../../styles/shared/forms.scss'
import './styles.scss'

import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import cx                   from 'bem-classnames'

import InputWrapper         from '../../components/InputWrapper'
import ReduxSubmit          from '../../components/ReduxSubmit'

import { maskPhone,
         isEmail,
         isPhone,
         isRequired }       from '../../utils/forms'

//-----------  Definitions  -----------//

const block = 'demo-form'

//-----------  Validation  -----------//

function validate(values){
  const errors = {}

  if (!isRequired(values.name))
    errors.name = 'Required'

  if (!isRequired(values.phone))
    errors.phone = 'Required'
  else if (!isPhone(values.phone))
    errors.phone = 'Invalid phone number'

  if (!isRequired(values.email))
    errors.email = 'Required'
  else if (!isEmail(values.email))
    errors.email = 'Invalid email address'

  return errors
}

//-----------  Component  -----------//

const DemoForm = (props) => {
  const blockCx = cx({ name: block }, props, props.className)

  return (
    <div className={blockCx}>
      <form noValidate className='side-by-side' onSubmit={props.handleSubmit}>
        <Field
          id='name'
          type='text'
          name='name'
          required={true}
          label='Name'
          component={InputWrapper}
        />
        <Field
          id='email'
          type='email'
          name='email'
          required={true}
          label='Email'
          component={InputWrapper}
        />
        <Field
          id='phone'
          type='tel'
          name='phone'
          required={true}
          label='Phone'
          component={InputWrapper}
          inputOpts={{ mask: maskPhone }}
        />
        <Field
          id='message'
          type='textarea'
          name='message'
          value='message'
          label='Comments'
          component={InputWrapper}
        />

        <ReduxSubmit type='submit' text='Submit' canReset={true} {...props} />
      </form>
    </div>
  )
}

//-----------  Prop Types  -----------//

DemoForm.propTypes = {
  onSubmit        : PropTypes.func.isRequired,
  onSubmitSuccess : PropTypes.func.isRequired,
}

//-----------  Exports  -----------//

export default reduxForm({ form: block, validate })(DemoForm)
