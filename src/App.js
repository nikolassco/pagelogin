import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import FormLogin from './pages/formlogin/FormLogin';
import NotFound from './pages/notfound/NotFound';
import Logged from './pages/logged/Logged';
import FormRegister from './pages/formregister/FormRegister';

const user = [
  { id: 1, name: "Nikolas", password: "senhateste" },
  { id: 2, name: "Teste", password: "senha" },
];

const access = [
  { id: 1, status: "denied" },
  { id: 2, status: "allowed" },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLogin user={user} access={access} />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/logged" element={<Logged />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
