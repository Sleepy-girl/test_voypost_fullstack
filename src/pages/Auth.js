import { useState } from 'react';
import Box from '../components/materialsComponents/Box';
import TypographyComponent from '../components/materialsComponents/Typography';
import ButtonComponent from '../components/materialsComponents/Button';
import LabelComponent from '../components/materialsComponents/Label';
import TextFieldComponents from '../components/materialsComponents/Input';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form } from 'formik';
import { authButParams, authInputParams } from './utils/params';
import { validationSchema } from './utils/validationSchema';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

function Auth() {
  const [isShow, setIsShow] = useState(false);

  const onHandleClick = () => setIsShow(prev => !prev);

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
      <Formik
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={validationSchema}
        initialValues={{
          fullname: '',
          email: '',
          password: '',
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            {authInputParams.map(input => (
              <Box key={uuidv4()} mb={3.75} style={{ position: 'relative' }}>
                <LabelComponent variant="standard" labelColor={input.color}>
                  {input.label}
                </LabelComponent>
                <>
                  <TextFieldComponents
                    key={uuidv4()}
                    variant="outlined"
                    type={
                      input.type === 'password' && isShow ? 'text' : input.type
                    }
                    id={input.name}
                    name={input.name}
                    value={values[input.value]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={input.placeholder}
                    helperText={
                      touched[input.value] &&
                      errors[input.value] &&
                      errors[input.value]
                    }
                    error={
                      touched[input.value] && errors[input.value] ? true : false
                    }
                  />
                  {input.name === 'password' && (
                    <Box
                      style={{
                        position: 'absolute',
                        top: '40px',
                        right: '20px',
                      }}
                      onClick={onHandleClick}
                    >
                      {isShow ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </Box>
                  )}
                </>
              </Box>
            ))}
            <ButtonComponent
              variant="contained"
              type="submit"
              size="large"
              color="primary"
            >
              Sing Up
            </ButtonComponent>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Auth;
