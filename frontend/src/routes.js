import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';


import FormLogin from './pages/FormLogin';
import FormRegister from './pages/FormRegister';
import Home from './pages/Home';
import NotFound from './pages/notfound/NotFound';

const ProtectedRoutes = ({ redirectTo }) => {
  const auth = localStorage.getItem("auth");
  return auth ? <Outlet /> : <Navigate to={redirectTo} />
}

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes redirectTo={'/register'} />} >
        <Route exact path="/" element={<Home />} />
      </Route>
      <Route path="/register" element={<FormRegister />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes;
