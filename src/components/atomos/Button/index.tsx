import React from "react";

import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "primary" | "secondary";
}

const { button, primary, secondary } = styles;
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
