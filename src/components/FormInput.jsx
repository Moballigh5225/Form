import React, { useState } from "react";
import "./forminput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  // here we are calling the props from the parent component to child component
  const { label, errorMessage, onChange, id, ...input } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label className="label-text">{label}</label>
      <input
        className="input-place"
        {...input}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => input.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
