
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login";
import { useGlobalStyles } from "./styles/globals";
function App() {
  useGlobalStyles();

  return (
    <>
      <LoginPage/>
      <Toaster />
    </>
  )
}

export default App
