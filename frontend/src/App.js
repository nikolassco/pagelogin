import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainRoutes from './routes';



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
