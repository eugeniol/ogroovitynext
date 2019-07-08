import React from 'react';
import createForm from './createForm.js';

export const uiSchema = {
  'ui:order': ['recurringIncentive', 'freeShiping', 'freeShipingThreashold', 'loopbackWindow', '*'],
  recurringIncentive: {
    'ui:help': '% off',
    className: 'foo'
  },
  nthOrderDiscount: {
    classNames: 'form-inline',
    'ui:help': (
      <a href="#" className="badge" title="some help here">
        ?
      </a>
    )
  }
};

export const schema = {
  type: 'object',
  properties: {
    recurringIncentive: {
      type: 'number',
      title: 'Recurring incentive'
    },
    freeShiping: {
      type: 'boolean',
      default: false,
      title: 'Free Shiping'
    },
    loopbackWindow: {
      type: 'number',
      title: 'Best deal guarantee lookback window'
    },
    nthOrderDiscount: {
      type: 'object',
      title: 'Nth order discount',
      properties: {
        every: {
          type: 'number',
          title: 'Every th order of a subscription'
        },
        discount: {
          type: 'number'
        },
        discountType: {
          type: 'string',
          enum: ['percent', 'amount'],
          enumNames: ['% Off', '$']
        }
      }
    }
  },
  dependencies: {
    freeShiping: {
      oneOf: [
        {
          properties: {
            freeShiping: {
              enum: [true]
            },
            freeShipingThreashold: {
              type: 'number',
              default: 'More info',
              title: '$ threashold'
            }
          },
          required: ['freeShiping']
        }
      ]
    }
  }
};

export const SubscriptionOptinWidgetForm = createForm(schema, uiSchema);

export default SubscriptionOptinWidgetForm;
