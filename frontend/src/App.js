import './App.css';

import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import FormLogin from './pages/FormLogin';
import NotFound from './pages/notfound/NotFound';
import Home from './pages/Home';
import FormRegister from './pages/FormRegister';

const ProtectedRoutes = ({ redirectTo }) => {
  const auth = localStorage.getItem("auth");
  return auth ? <Outlet /> : <Navigate to={redirectTo} />
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes redirectTo={'/register'} />} >
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route path="/register" element={<FormRegister />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
