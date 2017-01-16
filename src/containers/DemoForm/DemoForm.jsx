// //-----------  Imports  -----------//
//
// import '../../styles/shared/forms.scss'
// import './styles.scss'
//
// import React, { PropTypes } from 'react'
// import { Field, reduxForm } from 'redux-form'
// import cx                   from 'bem-classnames'
//
// import InputWrapper         from '../../components/InputWrapper'
//
// // import { maskPhone }        from '../../utilities/masks'
// // import { isEmail,
// //          isPhone,
// //          isRequired }       from '../../utilities/validators'
// //
// //-----------  Definitions  -----------//
//
// const block = 'demo-form'
//
// //-----------  Validation  -----------//
//
// function validate(values){
//   const errors = {}
//
//   // if (!isRequired(values.name))
//   //   errors.name = 'Required'
//   //
//   // if (!isRequired(values.phoneNumber))
//   //   errors.phone = 'Required'
//   // else if (!isPhone(values.phoneNumber))
//   //   errors.phone = 'Invalid phone number'
//   //
//   // if (!isRequired(values.email))
//   //   errors.email = 'Required'
//   // else if (!isEmail(values.email))
//   //   errors.email = 'Invalid email address'
//   //
//   // if (!isRequired(values.message))
//   //   errors.message = 'Required'
//
//   return errors
// }
//
// //-----------  Component  -----------//
//
// const DemoForm = (props) => {
//   const blockCx = cx({ name: block }, props, props.className)
//
//   return (
//     <div className={blockCx}>
//       <h3>Get more information about this property</h3>
//       <p>Our team will be in touch shortly.</p>
//
//       <form noValidate onSubmit={props.handleSubmit}>
//         <div className='control-group'>
//           <Field
//             type='text'
//             name='name'
//             required={true}
//             placeholder='FULL NAME'
//             component={InputWrapper}
//           />
//           <Field
//             type='email'
//             name='email'
//             required={true}
//             placeholder='EMAIL'
//             component={InputWrapper}
//           />
//           <Field
//             type='tel'
//             name='phoneNumber'
//             required={true}
//             placeholder='PHONE'
//             component={InputWrapper}
//             //inputOpts={{ mask: maskPhone }}
//           />
//         </div>
//
//         <Field name='message' component='textarea' placeholder='QUESTIONS / COMMENTS' value='message' />
//
//         {/*<ReduxSubmit type='submit' text='Submit' {...props} />*/}
//
//         <small>by submitting this request you are agreeing to our <a target='_blank' href='/terms'>Terms & Conditions</a>.</small>
//       </form>
//     </div>
//   )
// }
//
// //-----------  Prop Types  -----------//
//
// DemoForm.propTypes = {
//   onSubmit : PropTypes.func.isRequired
// }
//
// //-----------  Exports  -----------//
//
// export default reduxForm({ form: block, validate })(DemoForm)
