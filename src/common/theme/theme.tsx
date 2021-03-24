import { createMuiTheme } from "@material-ui/core";

const colors = {
  black: '#000000',
  error: '#FF0000',
  primary: '#6D9B12',
  secondary: '#4285F4'
}

// const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides:{
    MuiButton: {
      root: {
          width: 133,
          height: 50,
          fontWeight: 900,
          fontSize: 16        
      },
      sizeLarge: {
        width: 270,
        height: 50,
      },
      // sizeMedium: {
      //   width: 133,
      //   height: 50
      // },
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
        width: "550px",
      },

      h1: {
        fontSize: '36px',
        fontWeight: 900,
        lineHeight: "42px",
        // colorPrimary: colors.black,
      },
      h2: {
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: "38px",
      },
      h3: {
        fontSize: '28px',
        fontWeight: 500,
        lineHeight: "33px",
      },
      h4: {
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: "28px",
      },
      h5: {
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: "21px",
      },
      h6: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: "19px",
      },
      subtitle1: {
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: "19px",
      },
      subtitle2: {
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: "19px",
      },
      body1: {
        fontSize: '16px',
        lineHeight: "19px",
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