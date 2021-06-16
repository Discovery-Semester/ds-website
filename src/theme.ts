import {createMuiTheme} from "@material-ui/core/styles";

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
      color: {
        primary: string;
        secondary: string;
        red300: string;
        red500: string;
        red500Transparent: string;
      };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
      color?: {
        primary?: string;
        secondary?: string;
        red300?: string;
        red500?: string;
        red500Transparent?: string;
      };
    }
}

const theme = createMuiTheme({
    color: {
        primary: '#0076AA',
        secondary: '#e9eff1',
        red300: '#ebb599',
        red500: '#cc4f19',
        red500Transparent: 'rgba(204, 79, 25, 0.5)'
    },
});

export default theme;
