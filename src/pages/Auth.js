import { Container } from '@material-ui/core';
import Box from '../components/materialsComponents/Box';
import ButtonComponent from '../components/materialsComponents/Button';
import TypographyComponent from '../components/materialsComponents/Typography';
import { v4 as uuidv4 } from 'uuid';
import { authButParams, authInputParams } from './params';
import TextFieldComponents from '../components/materialsComponents/Input';
import LabelComponent from '../components/materialsComponents/Label';

function Auth() {
  return (
    <Box width={550} pt={19.75} mx="auto">
      <Box mb={11.25}>
        <TypographyComponent variant="h2">
          Sign up to set your brand up <br />
          for success
        </TypographyComponent>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={3.75}>
        {authButParams.map(button => (
          <ButtonComponent
            key={uuidv4()}
            variant="contained"
            size={button.size}
            type={button.type}
            color={button.color}
          >
            <img
              src={button.img.src}
              alt={button.img.alt}
              style={{ marginRight: 10 }}
            />
            {button.content}
          </ButtonComponent>
        ))}
      </Box>
      {authInputParams.map(input => (
        <Box key={uuidv4()} mb={3.75}>
          <LabelComponent variant="standard" labelColor={input.color}>
            {input.label}
          </LabelComponent>
          <TextFieldComponents
            variant={'outlined'}
            inputClassName="active"
            type={input.type}
            placeholder={input.placeholder}
            helperText={input.helperText}
            color={input.color}
          />
        </Box>
      ))}
      <ButtonComponent
        variant="contained"
        size="large"
        type="submit"
        color="primary"
      >
        Sing Up
      </ButtonComponent>
    </Box>
  );
}

export default Auth;
