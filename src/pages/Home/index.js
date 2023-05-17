import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }
  return (
    <div>
      <button onClick={logout}>Sair</button>
      <h1>Acessou o Sistema</h1>
      <p>Bem Vindo usuário {user.name}</p>
    </div>
  )
}

export default Home;
