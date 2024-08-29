// @ts-nocheck
import { RouterProvider } from "react-router-dom";
import "./assets/styles/App.css";
import router from "./routes";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode()
  
  return(
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider  theme={theme}>
          <CssBaseline />
              <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App;
