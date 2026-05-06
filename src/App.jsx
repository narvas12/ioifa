import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRegister from "./pages/Auth/AdminRegister";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Auth/AdminLogin";
import ProtectedRoute from "../utils/ProtectedRoutes";
import IncomeExpenditureAnalysis from "./pages/Dashboard/dashboardComponents/IncomeExpenditureAnalytics";
import Index from "./pages/home/Index";

import CompanyNameReservationForm from "./components/forms/CompanyNameReservationForm";
import ServiceDetail from "./components/homeComponents/ServiceDetail";
import Header from "./components/Navs/Header";
import Footer from "./components/Navs/Footer";
import About from "./pages/About";
import Certification from "./pages/Certification";
import Training from "./pages/Training";
import Research from "./pages/Research";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

// Layout component for unauthenticated routes
const UnAuthLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

// Public (unauthenticated) routes
const publicRoutes = [
  { path: "/", element: <Index /> },
  { path: "/about/ioifa", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/certification", element: <Certification /> },
  { path: "/research", element: <Research /> },
  { path: "/membership", element: <Membership /> },
  { path: "/training", element: <Training /> },
  { path: "/reservation", element: <CompanyNameReservationForm /> },
  { path: "/services/:serviceId", element: <ServiceDetail /> },
  { path: "/register", element: <AdminRegister /> },
  { path: "/login", element: <Login /> },
];

// Protected (authenticated) routes
const protectedRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/analytics", element: <IncomeExpenditureAnalysis /> },
];

const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<UnAuthLayout>{element}</UnAuthLayout>}
          />
        ))}

        {protectedRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
