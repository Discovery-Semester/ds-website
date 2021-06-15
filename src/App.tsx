import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import configureStore from "./store/reducers/Store";

const store = configureStore();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Header />
            <Main />
            <Footer />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
