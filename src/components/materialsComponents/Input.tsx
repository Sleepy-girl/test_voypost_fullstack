import { FC } from "react";
import { TextField } from "@material-ui/core";

interface TextFieldProp {
  variant: 'filled'| 'outlined'| 'standard';
  color: 'primary' | 'secondary';
  helperText?: string | false;
  error?: boolean;
  placeholder: string;
  type?: string;
  label?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TextFieldComponents: FC<TextFieldProp> = (props) => {
  const { 
    placeholder, 
    variant, 
    helperText, 
    label, 
    color, 
    type, 
    value, 
    name, 
    error, 
    onChange, 
    onBlur,
  } = props;

  return (
    <TextField 
      variant={variant} 
      type={type} 
      value={value}
      name={name}
      label={label} 
      error={error}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder} 
      helperText={helperText} 
      color={color} 
    />
  );
};

export default TextFieldComponents;