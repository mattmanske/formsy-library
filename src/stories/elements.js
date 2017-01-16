//-----------  Imports  -----------//

import { storiesOf, action, addDecorator }          from '@kadira/storybook'
import { withKnobs, select, text, boolean, number } from '@kadira/storybook-addon-knobs'

import _            from 'lodash'
import moment       from 'moment'
import React        from 'react'

import PageShade    from '../components/PageShade'
import PageSection  from '../components/PageSection'
import PageWrapper  from '../components/PageWrapper'

import Button       from '../components/Button'
import ButtonGroup  from '../components/ButtonGroup'
import InputWrapper from '../components/InputWrapper'

//-----------  Decorators  -----------//

addDecorator(withKnobs)

let elements = storiesOf('Elements', module)

let maskPhone = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

//-----------  Buttons  -----------//

elements.add('Buttons', () => {
  let sizeOpts  = { sm: 'Small', rg: 'Regular', lg: 'Large' }
  let colorOpts = { blue: 'Blue', gray: 'Gray', white: 'White' }

  let size     = select('Size', sizeOpts, 'rg')
  let color    = select('Color', colorOpts, 'blue')
  let loading  = boolean('Loading', false)
  let disabled = boolean('Disabled', false)

  return (
    <PageWrapper>
      <PageSection bounds='block'>
        <PageShade active={'white' == color} style={{ zIndex: 0 }} />
        <Button
          size={size}
          color={color}
          loading={loading}
          disabled={disabled}
        >
          Button
        </Button>
        <br /><br />
        <Button
          size={size}
          color={color}
          icon='cloud'
          loading={loading}
          disabled={disabled}
        >
          Icon Button
        </Button>
        <br /><br />
        <ButtonGroup>
          <Button
            size={size}
            color={color}
            icon='play_arrow'
            loading={loading}
            disabled={disabled}
          />
          <Button
            size={size}
            color={color}
            icon='pause'
            loading={loading}
            disabled={disabled}
          />
          <Button
            size={size}
            color={color}
            icon='volume_mute'
            loading={loading}
            disabled={disabled}
          />
        </ButtonGroup>
      </PageSection>
    </PageWrapper>
  )
})

//-----------  Inputs  -----------//

elements.add('Inputs', () => {
  let error    = boolean('Error', false)
  let required = boolean('Required', false)
  let disabled = boolean('Disabled', false)

  error = error && 'Invalid Input'

  let notes = 'Here\'s some useless notes for this input field...'
  let meta  = { touched: true, error }

  return (
    <PageWrapper>
      <PageSection bounds='small'>
        <InputWrapper
          id='text'
          type='text'
          disabled={disabled}
          required={required}
          placeholder='Full Name'
          label='Text Field'
          notes={notes}
          meta={meta}
        />
        <InputWrapper
          id='phone'
          type='phone'
          disabled={disabled}
          required={required}
          placeholder='Phone Number'
          label='Masked Field'
          notes={notes}
          inputIcon='phone'
          inputOpts={{ mask: maskPhone, autoComplete: 'off' }}
          meta={meta}
        />
        <InputWrapper
          id='date'
          type='date'
          disabled={disabled}
          required={required}
          placeholder='Start Date'
          label='Date Field'
          notes={notes}
          inputIcon='today'
          inputOpts={{ min: moment(), max: moment().add(14, 'd') }}
          meta={meta}
        />
        <InputWrapper
          id='select'
          type='select'
          disabled={disabled}
          required={required}
          placeholder='Select One...'
          label='Select Dropdown'
          notes={notes}
          inputIcon='keyboard_arrow_down'
          meta={meta}
        >
          <option key='null' selected disabled>Select One...</option>
          {['One', 'Two', 'Three'].map((val, idx) => (
            <option key={idx} value={val}>{val}</option>
          ))}
        </InputWrapper>
        <InputWrapper
          id='textarea'
          type='textarea'
          disabled={disabled}
          required={required}
          placeholder='Comments'
          label='Text Area'
          notes={notes}
          meta={meta}
        />
      </PageSection>
    </PageWrapper>
  )
})
