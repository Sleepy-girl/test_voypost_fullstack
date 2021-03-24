import { createMuiTheme } from "@material-ui/core";
import { Shadows } from "@material-ui/core/styles/shadows"

const colors = {
  primary: '#6D9B12',
  secondary: '#4285F4',
  error: '#FF0000',
  black: '#000000',
}

// const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  shadows: Array(25).fill("none") as Shadows,

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
        width: "133px",
        height: "50px",
        fontWeight: 900,
        fontSize: "16px",
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
        width: "550px",
        display: "block",
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