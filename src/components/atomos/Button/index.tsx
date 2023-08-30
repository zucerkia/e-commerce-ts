import React from "react";

import { button, primary, secondary } from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "primary" | "secondary";
}

export const Button = ({ as = "primary", children, ...rest }: ButtonProps) => {
  const styles = {
    primary: primary,
    secondary: secondary,
  };

  return (
    <button className={`${button} ${styles[as]}`} {...rest}>
      {children}
    </button>
  );
};
