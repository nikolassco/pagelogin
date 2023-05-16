import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import FormLogin from './pages/formlogin/FormLogin';
import NotFound from './pages/notfound/NotFound';
import Logged from './pages/logged/Logged';
import FormRegister from './pages/formregister/FormRegister';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLogin />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/home" element={<Logged />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
