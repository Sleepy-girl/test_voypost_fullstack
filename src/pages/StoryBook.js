import Box from '../components/materialsComponents/Box';
import ButtonComponent from '../components/materialsComponents/Button';
import TextFieldComponents from '../components/materialsComponents/Input';
import TypographyComponent from '../components/materialsComponents/Typography';
import { buttonParams, inputParams, typographyParams } from './params';
import { v4 as uuidv4 } from 'uuid';
import LabelComponent from '../components/materialsComponents/Label';

function StoryBook() {
  return (
    <Box pt={2} px={2.5} display="flex">
      <Box>
        <Box mr={7.75} mb={5.25}>
          <TypographyComponent variant="body1">Buttons</TypographyComponent>
          <Box width={583} minHeight={214}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
              mb={4}
            >
              {buttonParams.map(button => (
                <ButtonComponent
                  key={uuidv4()}
                  variant="contained"
                  type="button"
                  size={button}
                  color="primary"
                >
                  Sign up
                </ButtonComponent>
              ))}
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
              mb={4}
            >
              {buttonParams.map(button => (
                <ButtonComponent
                  key={uuidv4()}
                  variant="contained"
                  type="button"
                  size={button}
                  color="secondary"
                >
                  Sign up
                </ButtonComponent>
              ))}
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
              mb={4}
            >
              {buttonParams.map(button => (
                <ButtonComponent
                  key={uuidv4()}
                  variant="contained"
                  type="button"
                  size={button}
                >
                  Sign up
                </ButtonComponent>
              ))}
            </Box>
          </Box>
        </Box>
        <Box>
          <TypographyComponent variant="body1">Text fields</TypographyComponent>
          {inputParams.map(input => (
            <Box key={uuidv4()} mb={2.5}>
              <TypographyComponent variant="body2">
                {input.name}
              </TypographyComponent>
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
        </Box>
      </Box>

      <Box>
        <TypographyComponent variant="body1">Typography</TypographyComponent>
        {typographyParams.map(param => (
          <TypographyComponent
            key={uuidv4()}
            variant={param}
            color="textPrimary"
          >
            Typography
          </TypographyComponent>
        ))}
      </Box>
    </Box>
  );
}

export default StoryBook;
