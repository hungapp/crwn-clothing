import React from 'react';
import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLable
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormGroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLable className={`${otherProps.value.length ? 'shrink' : ''}`}>
        {label}
      </FormInputLable>
    ) : null}
  </FormGroupContainer>
);

export default FormInput;
