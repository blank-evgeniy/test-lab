import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import "./Button.css";

export enum ButtonTheme {
  BLUE = "button_blue",
  GRAY = "button_gray",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: ButtonTheme;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.BLUE,
  ...otherProps
}) => {
  return (
    <button className={classNames("button", className, theme)} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
