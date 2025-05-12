import { StyleSheetManager, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <>
      <StyleSheetManager target={document.head}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyleSheetManager>
    </>
  );
}

export default App;
