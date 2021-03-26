import { FC } from "react";
import { InputLabel } from "@material-ui/core";

interface InpitLabelProp {
  variant: "filled" | "outlined" | "standard";
  color: "primary" | "secondary";
  labelColor?: string;
  error?: boolean;
  focused?: boolean;
  children: string;
}

const LabelComponent: FC<InpitLabelProp> = (props) => {
  const { color, children, variant, error, focused, labelColor } = props;

  return (
    <InputLabel
      style={{ color: labelColor }}
      focused={focused}
      error={error}
      variant={variant}
      color={color}
    >
      {children}
    </InputLabel>
  );
};

export default LabelComponent;
