import "./App.css";
import Pages from "./pages/index";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BaseTheme } from "./theme/base";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <Pages />  {/* El componente Pages maneja las rutas */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;