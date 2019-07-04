import AddButton from 'react-jsonschema-form/lib/components/AddButton';
import React, { Component } from 'react';
import * as types from 'react-jsonschema-form/lib/types';

import {
  orderProperties,
  retrieveSchema,
  getDefaultRegistry,
  getUiOptions,
  ADDITIONAL_PROPERTY_FLAG
} from 'react-jsonschema-form/lib/utils';

export default function CustomObjectFieldTemplate(props) {
  const canExpand = function canExpand() {
    const { formData, schema, uiSchema } = props;
    if (!schema.additionalProperties) {
      return false;
    }
    const { expandable } = getUiOptions(uiSchema);
    if (expandable === false) {
      return expandable;
    }
    // if ui:options.expandable was not explicitly set to false, we can add
    // another property if we have not exceeded maxProperties yet
    if (schema.maxProperties !== undefined) {
      return Object.keys(formData).length < schema.maxProperties;
    }
    return true;
  };

  const { TitleField, DescriptionField } = props;
  return (
    <fieldset id={props.idSchema.$id}>
       {(props.uiSchema['ui:title'] || props.title) && (
        <TitleField
          id={`${props.idSchema.$id}__title`}
          title={props.title || props.uiSchema['ui:title']}
          required={props.required}
          formContext={props.formContext}
        />
      )} 
      {props.description && (
        <DescriptionField
          id={`${props.idSchema.$id}__description`}
          description={props.description}
          formContext={props.formContext}
        />
      )}
      {props.properties.map(prop => prop.content)}
      {canExpand() && (
        <AddButton
          className="object-property-expand"
          onClick={props.onAddClick(props.schema)}
          disabled={props.disabled || props.readonly}
        />
      )}
    </fieldset>
  );
}
