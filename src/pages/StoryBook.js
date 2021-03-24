import Box from '../components/materialsComponents/Box';
import TypographyComponent from '../components/materialsComponents/Typography';
import ButtonComponent from '../components/materialsComponents/Button';
import { typographyParams, buttonsParams } from './params';

function StoryBook() {
  return (
    <Box pt={2} px={2.5} display="flex">
      <Box>
        <Box mr={7.75} mb={5.25}>
          <Box mb={2}>
            <TypographyComponent variant="body1">Buttons</TypographyComponent>
          </Box>
          <Box width={583} minHeight={214}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
              mb={4}
            >
              {buttonsParams.map(button => (
                <ButtonComponent
                  variant="contained"
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
              {buttonsParams.map(button => (
                <ButtonComponent
                  variant="contained"
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
              {buttonsParams.map(button => (
                <ButtonComponent variant="contained" size={button}>
                  Sign up
                </ButtonComponent>
              ))}
            </Box>
          </Box>
        </Box>

        <Box>
          <Box mb={2}>
            <TypographyComponent variant="body1">
              Text fields
            </TypographyComponent>
          </Box>
          <Box mb={0.75}>
            <TypographyComponent variant="body1">Default</TypographyComponent>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box mb={2}>
          <TypographyComponent variant="body1">Typography</TypographyComponent>
        </Box>
        {typographyParams.map(param => (
          <Box mb={3}>
            <TypographyComponent display="block" key={param} variant={param}>
              Typography
            </TypographyComponent>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default StoryBook;
