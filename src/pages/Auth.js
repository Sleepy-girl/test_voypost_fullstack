import { useState } from 'react';
import Box from '../components/materialsComponents/Box';
import TypographyComponent from '../components/materialsComponents/Typography';
import ButtonComponent from '../components/materialsComponents/Button';
import { v4 as uuidv4 } from 'uuid';
import { authButParams, authInputParams } from './utils/params';
import TextFieldComponents from '../components/materialsComponents/Input';
import LabelComponent from '../components/materialsComponents/Label';
import { Formik, Form } from 'formik';
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
        initialValues={{
          fullname: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          isValid,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
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
                    name={input.name}
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={input.placeholder}
                    helperText={
                      touched.fullname && errors.fullname && errors.fullname
                    }
                    error={touched.fullname && errors.fullname ? true : false}
                    // style={{
                    //   borderColor:
                    // touched.fullname && errors.fullname
                    // ? '#FF0000'
                    // :
                    //     '#6D9B12',
                    // }}
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
              // disabled={!isValid}
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
