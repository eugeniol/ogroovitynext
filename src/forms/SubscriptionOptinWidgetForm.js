import React from 'react';
import createForm from './createForm.js';

export const uiSchema = {
  settings: {
    defaultFrequency: {
      classNames: 'form-inline'
    },
    frequencies: {
      items: {
        classNames: 'form-inline'
      }
    },
    offerType: {
      'ui:help': (
        <a href="#" className="badge" title="some help here">
          ?
        </a>
      )
    }
  },
  textCopy: {
    'ui:order': [
      'defaultFrequencyCopy',
      'offerOptInLabel',
      'offerEveryLabel',
      'offerOptOutLabel',
      'toolTip',
      'offerTooltipTrigger',
      'offerTooltipContent',
      '*'
    ],
    'ui:options': {
      label: false
    },
    tooltip: {
      'ui:options': {
        label: true
      }
    },
    offerTooltipContent: {
      'ui:widget': 'textarea',
      // 'ui:field': 'draftRte',
      draftRte: {
        toolbar: {
          options: ['inline']
        }
      }
    },
    upsellModalCopy: {
      'ui:field': 'draftRte',
      draftRte: {
        toolbar: {
          options: ['inline']
        }
      }
    }
  },
  styles: {
    global: {
      'ui:title': 'Global font',
      color: {
        'ui:widget': 'color',
        'ui:options': {
          label: true
        }
      },
      classNames: 'form-inline',
      size: {
        unit: {
          'ui:options': {
            label: true
          }
        },
        number: {
          'ui:options': {
            label: true
          }
        }
      }
    },
    tooltip: {
      'ui:title': 'Tooltip font',
      color: {
        'ui:widget': 'color',
        'ui:options': {
          label: true
        }
      },
      classNames: 'form-inline',
      size: {
        unit: {
          'ui:options': {
            label: true
          }
        }
      }
    },
    upsellColor: {
      'ui:title': 'Upsell button',
      'ui:widget': 'color'
    },
    upsell: {
      'ui:title': 'Upsell button font',
      color: {
        'ui:widget': 'color',
        'ui:options': {
          label: true
        }
      },
      classNames: 'form-inline',
      size: {
        unit: {
          'ui:options': {
            label: true
          }
        }
      }
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    settings: {
      title: 'Widget settings',
      $ref: '#/definitions/WidgetSettings'
    },
    textCopy: {
      title: 'Widget copy',
      type: 'object',
      properties: {
        defaultFrequencyCopy: {
          type: 'string',
          default: 'Recommended',
          title: 'Default frequency copy'
        },
        offerOptInLabel: {
          type: 'string',
          default: 'Subscribe and get 20% off',
          title: 'Subscribe option copy'
        },
        offerEveryLabel: {
          type: 'string',
          default: 'Ships Every: ',
          title: 'Subscribe frequency label'
        },
        offerOptOutLabel: {
          type: 'string',
          default: 'One-time    ',
          title: 'One-time option copy'
        },
        showTooltip: {
          type: 'boolean',
          default: false,
          title: 'Add a tool tip'
        },  
        upsellCopy: {
          type: 'string',
          default: 'Add to upcoming subscription order and receive 20% off',
          title: 'Upsell copy'
        },
        upsellButtonCopy: {
          type: 'string',
          default: 'Add to Next Order',
          title: 'Upsell button copy'
        },
        upsellMessage: {
          type: 'string',
          default: 'Add this item to your next order on [order_date] and get 10% off',
          title: 'Upsell message'
        },
        upsellModalCopy: {
          type: 'string',
          default:
            'Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Read the FAQ here. Promotion subject to change.',
          title: 'Upsell modal copy'
        },
        upsellModalOneTimeOptionCopy: {
          type: 'string',
          default: 'Get one-time',
          title: 'Upsell modal one-time option copy'
        },
        upsellModalSubscribeOptionCopy: {
          type: 'string',
          default: 'Subscribe and get 10% off on every order',
          title: 'Upsell modal subscribe option copy'
        },
        upsellModalAddButton: {
          type: 'string',
          default: 'Add',
          title: 'Upsell modal add button'
        }
      },
      dependencies: {
        showTooltip: {
          oneOf: [
            {
              properties: {
                showTooltip: {
                  enum: [true]
                },
                offerTooltipTrigger: {
                  type: 'string',
                  default: 'More info',
                  title: 'Tool tip link copy'
                },
                offerTooltipContent: {
                  type: 'string',
                  default:
                    'Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Read the FAQ here. Promotion subject to change.',
                  title: 'Tool tip copy'
                }
              },
              required: ['toolTip']
            }
          ]
        }
      }
    },
    styles: {
      type: 'object',
      title: 'Widget styles',
      properties: {
        global: {
          $ref: '#/definitions/Font',
          default: {
            familly: 'Arial, Helvetica, sans-serif',
            size: '13',
            unit: 'px',
            color: '#333333'
          }
        },
        tooltip: {
          $ref: '#/definitions/Font',
          default: {
            familly: 'Arial, Helvetica, sans-serif',
            size: '13',
            unit: 'px',
            color: '#298266'
          }
        },
        upsellColor: {
          type: 'string',
          default: '#298266'
        },
        upsell: {
          $ref: '#/definitions/Font',
          default: {
            familly: 'Arial, Helvetica, sans-serif',
            size: '13',
            unit: 'px',
            color: '#298266'
          }
        }
      }
    }
  }
};

export const SubscriptionOptinWidgetForm = createForm(schema, uiSchema);

export default SubscriptionOptinWidgetForm;
