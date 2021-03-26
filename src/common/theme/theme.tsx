import { createMuiTheme } from "@material-ui/core";
import { Shadows } from "@material-ui/core/styles/shadows"

const colors = {
  primary: '#6D9B12',
  secondary: '#4285F4',
  error: '#FF0000',
  black: '#000000',
  grey: '#EFEFEF',
  button: '#E5E5E5',
}

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  shadows: Array(25).fill("none") as Shadows,

  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    error: {
      main: colors.error
    },
  },
  
  overrides:{
    MuiButton: {
      root: {
        width: "133px",
        height: "50px",
        fontWeight: 900,
        fontSize: "16px",
        borderRadius: "6px",
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

    MuiInputLabel:{
      root:{
        fontWeight: 900,
        fontSize: "14px",
        lineHeight: "16px",
        marginBottom: defaultTheme.spacing(1),
      },
    },

    MuiTextField: {
      root: {
        width: "550px",
        margin: 0,
        borderRadius: "6px",
        background: colors.grey,
        lineHeight: "50px",
        '& .MuiOutlinedInput-root': { 
          '& fieldset': { 
              borderColor: colors.grey,  
          },
          '&:hover fieldset': {
              borderColor: colors.primary, 
          },
          '&.Mui-focused fieldset': { 
              border: `solid 1px ${colors.primary}`,
          },
          // '& fieldset.MuiOutlinedInput-notchedOutline': {
            //     borderColor: colors.primary,
            //   },
            // },
        },
      }, 
    },

    MuiFormHelperText: {
      root: {
        position: 'absolute',
        color: colors.error,
        bottom: -26,
      }
    },

    MuiTypography: {
      root: {
        width: "550px",
        textPrimary: {
          main: colors.black
        },  
        marginBottom: defaultTheme.spacing(3)
      },

      h1: {
        fontSize: '36px',
        fontWeight: 900,
        lineHeight: "42px",
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
        marginBottom: defaultTheme.spacing(2),
      },
      body2: {
        fontSize: '16px',
        lineHeight: "19px",
        marginBottom: defaultTheme.spacing(0.75),
      }
    },
  
    //   icon:{
    //     color: colors.primary,
    //   },
  },
})
export default theme;