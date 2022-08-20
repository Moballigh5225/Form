import React from "react";
import "./forminput.css";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...input } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...input} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
