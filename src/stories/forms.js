//-----------  Imports  -----------//

import { storiesOf, action, addDecorator }          from '@kadira/storybook'
import { withKnobs, select, text, boolean, number } from '@kadira/storybook-addon-knobs'

import _                   from 'lodash'
import moment              from 'moment'

import React               from 'react'
import { createStore,
         combineReducers,
         applyMiddleware } from 'redux'
import { Provider }        from 'react-redux'
import { reducer as form } from 'redux-form'
import thunkMiddleware     from 'redux-thunk'

import PageSection         from '../components/PageSection'
import PageWrapper         from '../components/PageWrapper'

import DemoForm            from '../containers/DemoForm'

//-----------  Decorators  -----------//

addDecorator(withKnobs)

const store = createStore(combineReducers({form}), applyMiddleware(thunkMiddleware))

let elements = storiesOf('Forms', module).addDecorator(getStory => (
  <Provider store={store}>{ getStory() }</Provider>
))

//-----------  Buttons  -----------//

elements.add('Demo Form', () => {
  return (
    <PageWrapper>
      <PageSection bounds='block'>
        <DemoForm />
      </PageSection>
    </PageWrapper>
  )
})
