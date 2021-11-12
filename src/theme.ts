import {createMuiTheme} from "@material-ui/core/styles";

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
      color: {
        blue500: string;
        grey500: string;
        grey300: string;
        red300: string;
        red500: string;
        red500Transparent: string;
      };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
      color?: {
        blue500?: string;
        grey500?: string;
        grey300?: string;
        red300?: string;
        red500?: string;
        red500Transparent?: string;
      };
    }
}

const karla = {
  fontFamily: 'Karla',
  fontWeight: 400,
};

const theme = createMuiTheme({
    color: {
        blue500: '#0076AA',
        grey500: '#e9eff1',
        grey300: '#f4f7f8',
        red300: '#ebb599',
        red500: '#cc4f19',
        red500Transparent: 'rgba(204, 79, 25, 0.5)'
    },
    typography: {
      "fontFamily": "'Karla', 'sans-serif'"
    },
    
});

export default theme;
