import Box from '../components/materialsComponents/Box';
import TypographyComponent from '../components/materialsComponents/Typography';
import ButtonComponent from '../components/materialsComponents/Button';
import { typographyParams, buttonsParams } from './params';

function StoryBook() {
  return (
    <Box pt={2} px={2.5} display="flex">
      <Box mr={7.75}>
        <Box mb={5.25}>
          <TypographyComponent variant="body1" display="inline-block">
            Buttons
          </TypographyComponent>
          <Box
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            minHeight={214}
          >
            <Box display="flex" justifyContent="space-between">
              {buttonsParams.map(button => (
                <ButtonComponent
                  variant="contained"
                  size={button.size}
                  color="primary"
                >
                  Sign up
                </ButtonComponent>
              ))}
            </Box>
            <Box display="flex" justifyContent="space-between">
              {buttonsParams.map(button => (
                <ButtonComponent
                  variant="contained"
                  size={button.size}
                  color="secondary"
                >
                  Sign up
                </ButtonComponent>
              ))}
            </Box>
            <Box display="flex" justifyContent="space-between">
              {buttonsParams.map(button => (
                <ButtonComponent variant="contained" size={button.size}>
                  Sign up
                </ButtonComponent>
              ))}
            </Box>
          </Box>
        </Box>
        <Box>
          <TypographyComponent variant="body1" display="inline-block">
            Text fields
          </TypographyComponent>
        </Box>
      </Box>

      <Box>
        <TypographyComponent variant="body1" display="inline-block">
          Typography
        </TypographyComponent>
        {typographyParams.map(param => (
          <TypographyComponent key={param} variant={param}>
            Typography
          </TypographyComponent>
        ))}
      </Box>
    </Box>
  );
}

export default StoryBook;
