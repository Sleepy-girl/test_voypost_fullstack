import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'at least 2 characters')
    .max(30, 'max 30 characters')
    .required('Required field'),
  email: Yup.string().email('Invalid email').required('Required field'),
  password: Yup.string()
    .min(
      8,
      'Please input your password! The password must be at least 8 characters!',
    )
    .required('Required field'),
});
