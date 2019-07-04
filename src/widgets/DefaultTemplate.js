import React, { Component } from 'react';
const REQUIRED_FIELD_SYMBOL = '*';
function Label(props) {
  const { label, required, id } = props;
  if (!label) {
    return null;
  }
  return (
    <label className="control-label col-md-2" htmlFor={id}>
      {label}
      {required && <span className="required">{REQUIRED_FIELD_SYMBOL}</span>}
    </label>
  );
}

export default function FieldTemplate(props) {
  const { id, label, children, errors, help, description, hidden, required, displayLabel } = props;
  if (hidden) {
    return <div className="hidden">{children}</div>;
  }
  console.log(children[0].props.name, children[0].type.name);

  return (
    <div className="row">
      {displayLabel && <Label label={label} required={required} id={id} />}
      {displayLabel && description ? description : null}
      {children}
      {errors}
      {help}
    </div>
  );
}
