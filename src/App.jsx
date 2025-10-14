
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login";
import { useGlobalStyles } from "./styles/globals";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/main";
function App() {
  useGlobalStyles();

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
