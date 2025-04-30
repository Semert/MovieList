import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes";
import store from "./redux/store";
import "./styles/main.scss";
import { themeOptions } from "./utils/theme";

const theme = createTheme(themeOptions);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <div className="app-container">
            <Header />
            <main className="main-content">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
