export const definitions = {
  OfferType: {
    type: 'string',
    enum: ['radio', 'toggle', 'select'],
    enumNames: ['Radio Button', 'Toggle Button', 'Select Dropdown'],
    default: 'radio'
  },
  Frequency: {
    type: 'object',
    properties: {
      every: {
        type: 'number',
        default: 1
      },
      period: {
        type: 'number',
        enum: [1, 2, 3],
        enumNames: ['Days', 'Weeks', 'Months'],
        default: 2
      }
    }
  },
  WidgetSettings: {
    type: 'object',
    properties: {
      frequencies: {
        title: 'Available frequencies',
        type: 'array',
        items: {
          $ref: '#/definitions/Frequency'
        },
        default:[
            {every: 1, period:2},
            {every: 2, period:2},
            {every: 1, period:3},
        ]
      },
      defaultFrequency: {
        title: 'Default frequency selection',
        $ref: '#/definitions/Frequency'
      },
      offerType: {
        title: 'Type',
        $ref: '#/definitions/OfferType'
      },
      defaultOptin: {
        title: 'Offer default selection',
        enum: ['one-time', 'subscribed'],
        enumName: ['One time', 'Subscribed'],
        default: 'one-time'
      }
    }
  },
  Font: {
    type: 'object',
    properties: {
      familly: {
        title: 'Font',
        type: 'string',
        default: 'Helvetica, sans-serif'
      },
      color: {
        type: 'string'
      },
      size: {
        type: 'number',
        default: 12
      },
      unit: {
        type: 'string',
        default: 'px',
        enum: ['px', 'em', '%', 'rem']
      }
    }
  }
};

export default { definitions };
