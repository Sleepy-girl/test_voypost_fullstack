import { Typography } from "@material-ui/core";
import { FC } from "react";

interface TypographyProp {
  display?: "initial" | "block" | "inline";
  color?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";
  align?: "inherit" | "left" | "center" | "right" | "justify";
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "srOnly"
    | "inherit";
  children: string;
}

const TypographyComponent: FC<TypographyProp> = (props) => {
  const { color, align, variant, children, display } = props;

  return (
    <Typography display={display} color={color} align={align} variant={variant}>
      {children}
    </Typography>
  );
};

export default TypographyComponent;
