import React from 'react';
import createForm from './createForm.js';

export const uiSchema = {
  welcomeMessage: {
    'ui:widget': 'textarea'
  },
  reminderMessage: {
    'ui:widget': 'textarea'
  },
  confirmationMessage: {
    'ui:widget': 'textarea'
  },
};

export const schema = {
  type: 'object',
  properties: {
    reminderDays: {
      type: 'number',
      title: 'Reorder reminder days',
      default: 30
    },
    welcomeMessage: {
      type: 'string',
      title: 'Welcome message',
      default: 'The final two rebounds came in the closing seconds of the game, with the outcome already decided. '
    },
    reminderMessage: {
      type: 'string',
      title: 'Reminder message',
      default:
        'Thunder coach Billy Donovan had sought to pull his starters with 1:04 remaining, a 16-point lead giving Oklahoma City plenty of cushion for its 45th win of the season.'
    },
    confirmationMessage: {
      type: 'string',
      title: 'Welcome message',
      default:
        'But as Paul George, Jerami Grant, and Dennis Schröder all headed to the bench, Westbrook waved off would-be substitute Hamidou Diallo.  '
    }
  }
};

export const SubscriptionOptinWidgetForm = createForm(schema, uiSchema);

export default SubscriptionOptinWidgetForm;
