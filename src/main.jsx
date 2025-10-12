import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./styles/theme.js";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
);
