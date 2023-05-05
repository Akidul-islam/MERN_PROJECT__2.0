import React from 'react';

const InputFields = ({
  lable,
  bodyClass,
  inputClass,
  name,
  value,
  ...others
}) => {
  return (
    <div className={inputBody}>
      <label htmlFor={name}>{label}</label>
      <input {...others} type={type} name={name} value={value} />
    </div>
  );
};

export default InputFields;
