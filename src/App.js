import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";
import HomePage from "./pages/home";
import RootLayout from "./components/RootLayout";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/moradores" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
