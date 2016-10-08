//-----------  Imports  -----------//

import * as storybook from '@kadira/storybook'
import { setOptions } from '@kadira/storybook-addon-options'

//-----------  Configuration  -----------//

setOptions({
  name             : 'Formsy Input LIbrary',
  url              : 'https://github.com/mattmanske/formsy-library',
  downPanelInRight : true,
});

//-----------  Configuration  -----------//

storybook.configure(() =>
  require('../stories/index.js'),
module)
