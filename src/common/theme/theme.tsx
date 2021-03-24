import { createMuiTheme } from "@material-ui/core";

const colors = {
  primary: '#6D9B12',
  secondary: '#4285F4',
  error: '#FF0000',
  black: '#000000',
}

// const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main:  colors.secondary
    },
  },

  overrides:{
    MuiButton: {
      root: {
          width: 133,
          height: 50,
          fontSize: 16,      
          fontWeight: 900,
      },
      sizeLarge: {
        width: 270,
        height: 50,
      },
      sizeSmall: {
        width: 120,
        height: 40
      },
      label: {
          textTransform: 'none'
      }
    },
    
    MuiTypography: {
      root: {
        color: colors.black,
        width: 550,
        display: "block",
      },

      h1: {
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 42,
        // colorPrimary: colors.black,
      },
      h2: {
        fontSize: 32,
        fontWeight: 700,
        lineHeight: 38,
      },
      h3: {
        fontSize: 28,
        fontWeight: 500,
        lineHeight: 33,
      },
      h4: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 28,
      },
      h5: {
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 21,
      },
      h6: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 19,
      },
      subtitle1: {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 19,
      },
      subtitle2: {
        fontSize: 14,
        fontWeight: 300,
        lineHeight: 19,
      },
      body1: {
        fontSize: 16,
        lineHeight: 19,
      }
    },
    MuiSelect:{
      root:{
        // paddingRight: defaultTheme.spacing(3),
      },
      icon:{
        color: colors.primary,
      },
    },
  },
})
export default theme;