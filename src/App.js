import { BrowserRouter, Route, Routes } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import './App.css'
import ProfilePage from "./pages/profile";
import SettingsPage from "./pages/settings";
import InvoicesPage from "./pages/invoices";
import AnnouncementsPage from "./pages/announcements";
import CommercePage from "./pages/commerce";
import DashboardPage from "./pages/dashboard";
import ProductsPage from "./pages/products";
import EmployeesPage from "./pages/employees";
import LoginPage from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/comercio" element={<CommercePage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/funcionários" element={<EmployeesPage />} />
        <Route path="/faturas" element={<InvoicesPage />} />
        <Route path="/comunicado" element={<AnnouncementsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
