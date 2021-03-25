import { FC } from "react";
import { TextField } from "@material-ui/core";

interface TextFieldProp {
  variant: 'filled'| 'outlined'| 'standard';
  margin?: 'dense' | 'none' | 'normal';
  color: 'primary' | 'secondary';
  helperText?: string | false;
  // error?: boolean;
  placeholder: string;
  type?: string;
  label?: string;
  // value?: string;
  // name?: string;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

}

const TextFieldComponents: FC<TextFieldProp> = (props) => {
  const { placeholder, variant, helperText, label, margin, color, type } = props;

  return (
    <TextField 
      variant={variant} 
      type={type} 
      label={label} 
      placeholder={placeholder} 
      helperText={helperText} 
      color={color} 
      margin={margin} 
    />
  );
};

export default TextFieldComponents;