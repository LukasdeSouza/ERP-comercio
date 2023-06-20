import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home";
import RootLayout from "./components/RootLayout";
import './App.css'
import ProfilePage from "./pages/profile";
import SettingsPage from "./pages/settings";
import ResidentsPage from "./pages/commerce";
import InvoicesPage from "./pages/invoices";
import AnnouncementsPage from "./pages/announcements";
import CommercePage from "./pages/commerce";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />

        <Route path="/commerce" element={<CommercePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/faturas" element={<InvoicesPage />} />
        <Route path="/comunicado" element={<AnnouncementsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
