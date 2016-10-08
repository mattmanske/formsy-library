//-----------  Imports  -----------//

import { storiesOf, action, addDecorator }          from '@kadira/storybook'
import { withKnobs, select, text, boolean, number } from '@kadira/storybook-addon-knobs'

import React        from 'react'
import Form         from '../src/utils/FormWrapper'

import Input        from '../src/Input'
import Select       from '../src/Select'
import Textarea     from '../src/Textarea'
import Checkboxes   from '../src/Checkboxes'
import Radiobuttons from '../src/Radiobuttons'

//-----------  Decorators  -----------//

const FormDecorator = (story) => (<Form>{ story() }</Form>)

addDecorator(FormDecorator)
addDecorator(withKnobs)

//-----------  Definitions  -----------//

const inputTypeOptions = {
  'color'          : 'Color',
  'date'           : 'Date',
  'datetime'       : 'Datetime',
  'datetime-local' : 'Local Datetime (datetime-local)',
  'email'          : 'Email',
  'hidden'         : 'Hidden',
  'month'          : 'Month',
  'number'         : 'Number',
  'password'       : 'Password',
  'range'          : 'Range',
  'search'         : 'Search',
  'tel'            : 'Telephone (tel)',
  'text'           : 'Text',
  'time'           : 'Time',
  'url'            : 'Url',
  'week'           : 'Week'
}

const selectOptions = [
  { value: 'IL', label: 'Illinois' },
  { value: 'WA', label: 'Washington' },
  { value: 'WI', label: 'Wisconsin' },
]

const checkboxOptions = [
  { value: 'apple', label: 'Apple Juice' },
  { value: 'orange', label: 'Orange Juice', defaultChecked: true },
  { value: 'cranberry', label: 'Cranberry Juice', disabled: true },
]

const radiobuttonOptions = [
  { value: 'farari', label: 'Farari' },
  { value: 'volkswagen', label: 'VW', defaultChecked: true },
  { value: 'subaru', label: 'Subaru', disabled: true },
]

//-----------  Input Stories  -----------//

const inputs = storiesOf('Basic Fields', module)

inputs.add('Input', () => {
  const type        = select('Type', inputTypeOptions, 'text')
  const label       = text('Label', 'Name')
  const placeholder = text('Placeholder', 'Your full name')
  const disabled    = boolean('Disabled', false)
  const required    = boolean('Required', true)

  return (
    <Input
      ref='input'
      name='input'
      type={type}
      label={label}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
    />
  )
})

inputs.add('Select', () => {
  const label       = text('Label', 'State')
  const placeholder = text('Placeholder', 'Select state...')
  const disabled    = boolean('Disabled', false)
  const required    = boolean('Required', true)
  const multiple    = boolean('Mulplile', false)
  const allowNull   = boolean('Allow Null?', true)

  return (
    <Select
      ref='select'
      name='select'
      label={label}
      required={required}
      disabled={disabled}
      multiple={multiple}
      allowNull={allowNull}
      placeholder={placeholder}
      options={selectOptions}
    />
  )
})

inputs.add('Textarea', () => {
  const label       = text('Label', 'Comments')
  const placeholder = text('Placeholder', 'Your comments')
  const rows        = number('Rows', 4)
  const cols        = number('Columns', 20)
  const disabled    = boolean('Disabled', false)
  const required    = boolean('Required', true)

  return (
    <Textarea
      ref='textarea'
      name='textarea'
      label={label}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
    />
  )
})

inputs.add('Checkboxes', () => {
  const label         = text('Label', 'Choose your favorite juice:')
  const disabled      = boolean('Disabled', false)
  const required      = boolean('Required', true)
  const prependLabels = boolean('Prepend Labels?', false)

  return (
    <Checkboxes
      ref='checkboxes'
      name='checkboxes'
      label={label}
      required={required}
      disabled={disabled}
      prependLabels={prependLabels}
      options={checkboxOptions}
    />
  )
})

inputs.add('Radio Buttons', () => {
  const label         = text('Label', 'Choose your favorite car:')
  const disabled      = boolean('Disabled', false)
  const required      = boolean('Required', true)
  const prependLabels = boolean('Prepend Labels?', false)

  return (
    <Radiobuttons
      ref='radiobuttons'
      name='radiobuttons'
      label={label}
      required={required}
      disabled={disabled}
      prependLabels={prependLabels}
      options={radiobuttonOptions}
    />
  )
})
