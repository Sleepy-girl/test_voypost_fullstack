import { FC } from "react";
import { TextField } from "@material-ui/core";

interface TextFieldProp {
  placeholder: string;
  type?: string;
}

const TextFieldComponents: FC<TextFieldProp> = ({ type,  placeholder } ) => {

  return <TextField variant="outlined" type={type} placeholder={placeholder} />;
};

export default TextFieldComponents;