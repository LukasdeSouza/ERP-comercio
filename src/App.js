import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";
import HomePage from "./pages/home";
import RootLayout from "./components/RootLayout";
import './App.css'
import ProfilePage from "./pages/profile";
import SettingsPage from "./pages/settings";
import ResidentsPage from "./pages/residents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />

        <Route path="/moradores" element={<ResidentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
