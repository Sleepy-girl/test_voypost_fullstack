import { createMuiTheme } from "@material-ui/core";

const colors = {
  green: "lime"
}

const theme = createMuiTheme({
  overrides:{
    MuiSelect:{
      root:{
        // paddingRight: defaultTheme.spacing(3),
      },
      icon:{
        color: colors.green,
      }
    }
  },
  // width: "550px",
  typography: {
    h1: {
      fontSize: '36px',
      fontWeight: 900,
      fontStyle: "normal",
      lineHeight: "42px",
    },
    h2: {
      fontSize: '32px',
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "38px",
    },
    h3: {
      fontSize: '28px',
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "33px",
    },
    h4: {
      fontSize: '24px',
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "28px",
    },
    h5: {
      fontSize: '18px',
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "21px",
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "19px",
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "19px",
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 300,
      fontStyle: "normal",
      lineHeight: "19px",
    },
  }
})
export default theme;