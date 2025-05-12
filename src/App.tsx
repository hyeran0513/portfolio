import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import {
  ThemeProvider as AppThemeProvider,
  useTheme,
} from "./context/ThemeContext";

function InnerApp() {
  const { isDarkMode } = useTheme();

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <AppThemeProvider>
      <InnerApp />
    </AppThemeProvider>
  );
}

export default App;
