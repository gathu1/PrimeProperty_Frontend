
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Register from './components/Auth';
import Signin from './components/Login';
import Sign from './components/Logint';
import Reset from './components/Reset';
import Type from './components/Types';
import Dash from './components/Dashboard';
import House from './components/Houses';
import Payment from './components/Payments';
import Report from './components/Reports';
import Tenant from './components/Tenants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Index';
import Single from './components/Single';
import Multi from './components/Multi';
import Student from './components/Student';
import Affordable from './components/Affordable';
import Community from './components/Community';
import Commercial from './components/Commercial';
import Investment from './components/Investment';
import About from './components/About';
import Price from './components/Price';
import Contact from './components/Contact';
import Maintenance from './components/Maintenance';
import Lease from './components/Lease';
import Announcements from './components/Announcements';
import Rent from './components/Rent';
import Inquire from "./components/Inquiry";
import Requests  from "./components/Requests";
import Vacant  from "./components/Vacant";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/auth",
    "/login",
    "/logint",
    "/reset",
    "/types",
    "/dash",
    "/houses",
    "/payments",
    "/tenants",
    "/reports",
    "/maintenance",
    "/lease",
    "/announcements",
    "/rent",
    "/inquire",
    "/requests",
    "/vacant"
  ];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname.toLowerCase()) && <Navbar />}
      {children}
      {!hideNavbarRoutes.includes(location.pathname.toLowerCase()) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Layout><Register /></Layout>} />
        <Route path="/login" element={<Layout><Signin /></Layout>} />
        <Route path="/logint" element={<Layout><Sign /></Layout>} />
        <Route path="/reset" element={<Layout><Reset /></Layout>} />
        <Route path="/types" element={<Layout><Type /></Layout>} />
        <Route path="/dash" element={<Layout><Dash /></Layout>} />
        <Route path="/houses" element={<Layout><House /></Layout>} />
        <Route path="/payments" element={<Layout><Payment /></Layout>} />
        <Route path="/tenants" element={<Layout><Tenant /></Layout>} />
        <Route path="/reports" element={<Layout><Report /></Layout>} />
        <Route path="/inquire" element={<Layout><Inquire /></Layout>} />
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/single-family" element={<Layout><Single /></Layout>} />
        <Route path="/multifamily" element={<Layout><Multi /></Layout>} />
        <Route path="/studenthousing" element={<Layout><Student /></Layout>} />
        <Route path="/affordablehousing" element={<Layout><Affordable /></Layout>} />
        <Route path="/communityassociations" element={<Layout><Community /></Layout>} />
        <Route path="/commercial" element={<Layout><Commercial /></Layout>} />
        <Route path="/investmentmanagement" element={<Layout><Investment /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/price" element={<Layout><Price /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/maintenance" element={<Layout><Maintenance /></Layout>} />
        <Route path="/lease" element={<Layout><Lease /></Layout>} />
        <Route path="/announcements" element={<Layout><Announcements /></Layout>} />
        <Route path="/rent" element={<Layout><Rent /></Layout>} />
        <Route path="/requests" element={<Layout><Requests /></Layout>} />
        <Route path="/vacant" element={<Layout><Vacant /></Layout>} />

      </Routes>
    </Router>
  );
};

export default App;
