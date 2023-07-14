import { BrowserRouter as Router, Route, Routes, Switch, Navigate, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css'
import ProfilePage from "./pages/profile";
import SettingsPage from "./pages/settings";
import InvoicesPage from "./pages/invoices";
import AnnouncementsPage from "./pages/announcements";
import CommercePage from "./pages/commerce";
import FinancialPage from "./pages/financial";

import ProductsPage from "./pages/products";
import EmployeesPage from "./pages/employees";
import LoginPage from "./pages/login";
import CommmerceEditPage from "./pages/commerce/edit";
import FinancialEditPage from "./pages/financial/edit";
import ProductsEditPage from "./pages/products/edit";
import EmployeesEditPage from "./pages/employees/edit";
import InvoicesEditPage from "./pages/invoices/edit";
import Page404 from "./pages/404";
import ExpensesPage from "./pages/expenses";
import ExpensesEditPage from "./pages/expenses/edit";
import ContractsPage from "./pages/invoices";
import ContractsEditPage from "./pages/invoices/edit";
import ClientsPage from "./pages/clients";
import ClientsEditPage from "./pages/clients/edit";
import SplashScreenPage from "./pages/splash";
import MyComponent from "./pages/splash";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />

        <Route path="/financeiro" element={<FinancialPage />} />
        <Route path="/financeiro/:id" element={<FinancialEditPage />} />

        <Route path="/despesas" element={<ExpensesPage />} />
        <Route path="/despesas/:id" element={<ExpensesEditPage />} />

        <Route path="/splash" element={<MyComponent />} />

        <Route path="/comercio" element={<CommercePage />} />
        <Route path="/comercio/:id" element={<CommmerceEditPage />} />
        {/* 
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/produtos/:id" element={<ProductsEditPage />} /> */}

        <Route path="/funcionarios" element={<EmployeesPage />} />
        <Route path="/funcionarios/:id" element={<EmployeesEditPage />} />

        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/clientes/:id" element={<ClientsEditPage />} />

        <Route path="/contratos" element={<ContractsPage />} />
        <Route path="/contratos/:id" element={<ContractsEditPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
