import React from 'react';
import Form from 'react-jsonschema-form';

import formFields from 'react-jsonschema-form-extras';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-day-picker/lib/style.css';

import definitions from './definitions';
import customFields from '../fields';
import widgets from '../widgets';
console.log(formFields);

const fields = { ...formFields, ...customFields };


const resolveContextualHelp = key => {
  const w = document.querySelector('#' + key);
  document.getElementById('contextHelp').style.top = w.offsetTop + 'px';
};

export default function createForm(inputschema, uiSchema) {
  return props => (
    <Form
      onFocus={resolveContextualHelp}
      schema={{ ...definitions, ...inputschema }}
      uiSchema={uiSchema}
      fields={fields}
      widgets={widgets}
      {...props}
    >
      {/* Empty div to disable action buttons  */}
      <div />
    </Form>
  );
}
