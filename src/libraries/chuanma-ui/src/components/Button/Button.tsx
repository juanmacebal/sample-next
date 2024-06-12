import React from "react";

import "./Button.css";

import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ text, variant, disabled, onClick }) => {
  return (
    <button
      className={`button button--${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;