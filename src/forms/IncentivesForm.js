import React from 'react';
import createForm from './createForm.js';

export const uiSchema = {};

export const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  }
};

export const SubscriptionOptinWidgetForm = createForm(schema, uiSchema);

export default SubscriptionOptinWidgetForm;
