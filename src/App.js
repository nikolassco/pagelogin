import './App.css';
import FormLogin from './components/FormLogin';

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
      <h2>Logar no Sistema</h2>
      <FormLogin user={user} access={access} />
    </div>
  );
}

export default App;
