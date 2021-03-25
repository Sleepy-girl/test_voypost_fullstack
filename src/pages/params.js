import googleIcon from '../assets/images/auth/google.svg';
import microsoftIcon from '../assets/images/auth/microsoft.svg';

export const buttonParams = ['large', 'medium', 'small'];
export const authButParams = [
  {
    size: 'large',
    type: 'button',
    name: 'google',
    color: 'secondary',
    img: { src: googleIcon, alt: 'googleIcon' },
    content: 'Sign up with Google',
  },
  {
    size: 'large',
    type: 'button',
    name: 'microsoft',
    // color: '',
    img: { src: microsoftIcon, alt: 'microsoftIcon' },
    content: 'Sign up with Microsoft',
  },
];

export const inputParams = [
  {
    className: 'default',
    name: 'Default',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Placeholder',
    helperText: '',
    color: '#000000',
  },
  {
    className: 'active',
    name: 'Active',
    type: 'email',
    label: 'Email Adrress',
    placeholder: 'Placeholder',
    helperText: '',
    color: '#6D9B12',
  },
  {
    className: 'error',
    name: 'Error',
    type: 'password',
    label: 'Password (8 characters)',
    placeholder: 'Placeholder',
    helperText:
      'Please input your password! The password must be at least 8 characters!',
    color: '#FF0000',
  },
];

export const typographyParams = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
];
