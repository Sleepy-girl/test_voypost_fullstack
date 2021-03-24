import { Button } from "@material-ui/core";
import { FC } from "react";

interface ButtonProps {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  children: string;
  size: "large" | "medium" | "small";
  disabled?: boolean;
  type?: "submit" | "button";
  startIcon?: SVGElement | any;
}

const ButtonComponent: FC<ButtonProps> = (props) => {
  const { startIcon, type, variant, color, children, size, disabled } = props;
  return (
    <Button
      startIcon={startIcon}
      type={type}
      disabled={disabled}
      size={size}
      color={color}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;