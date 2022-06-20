import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import FormLogin from './pages/FormLogin';
import NotFound from './pages/NotFound';
import Logged from './pages/Logged';

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
          <Route path="/logged" element={<Logged />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
