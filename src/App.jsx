import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login";
import { useGlobalStyles } from "./styles/globals";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home";
import { useEffect } from "react";

function App() {
  useGlobalStyles();

  const location = useLocation()

  useEffect(() => {
    const titles = {
      '/': 'نماوا',
      '/login': 'ورود',
    };
    document.title = titles[location.pathname]
  } , [location.pathname])

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
