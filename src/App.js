import { BrowserRouter as Router, Route, Routes, Switch, Navigate, BrowserRouter } from "react-router-dom";
import React from 'react';
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
import CommmerceEditPage from "./pages/commerce/edit";
import DashboardEditPage from "./pages/dashboard/edit";
import ProductsEditPage from "./pages/products/edit";
import EmployeesEditPage from "./pages/employees/edit";
import InvoicesEditPage from "./pages/invoices/edit";
import Page404 from "./pages/404";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/:id" element={<DashboardEditPage />} />

        <Route path="/comercio" element={<CommercePage />} />
        <Route path="/comercio/:id" element={<CommmerceEditPage />} />

        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/produtos/:id" element={<ProductsEditPage />} />

        <Route path="/funcionários" element={<EmployeesPage />} />
        <Route path="/funcionários/:id" element={<EmployeesEditPage />} />

        <Route path="/faturas" element={<InvoicesPage />} />
        <Route path="/faturas/:id" element={<InvoicesEditPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
