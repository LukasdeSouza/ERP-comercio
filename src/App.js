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
import ProductsPage from "./pages/products";
import EmployeesPage from "./pages/employees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/commerce" element={<CommercePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
