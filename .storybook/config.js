//-----------  Imports  -----------//

import '../src/styles/core.scss'

import * as storybook from '@kadira/storybook'
import { setOptions } from '@kadira/storybook-addon-options'

//-----------  Configuration  -----------//

setOptions({
  name : 'Formsy Redux Form UI',
  url  : 'http://manske.me/formsy-ui',
});

//-----------  Configuration  -----------//

storybook.configure(() =>
  require('../src/stories/forms.js'),
  require('../src/stories/elements.js'),
module)
