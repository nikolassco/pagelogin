import { useState } from 'react';
import Logged from "../logged/Logged";
import { Link } from "react-router-dom";

const FormLogin = ({ user, access }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(access[0].status);
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name === user[0].name && password === user[0].password) || (name === user[1].name && password === user[1].password)) {
      setToken(access[1].status);
    } else {
      setResponse("Usuario/senha inválido");
      setTimeout(() => {
        setResponse("");
      }, 2500);
    }
  }

  return (
    <div>
      {token === "denied" &&
        <>
          <div className="form_box">
            <form onSubmit={handleSubmit} >
              <h2>Entrar</h2>
              <input type="text" name="name" placeholder="Digite o seu nome" value={name} onChange={(e) => setName(e.target.value)} className="input" required />
              <input type="password" name="password" placeholder="Digite a sua senha" value={password} onChange={(e) => setPassword(e.target.value)} className="input" required />
              <input type="submit" value="Entrar" className="btn-login" />
            </form>
            <p>ou</p>
            <Link to="/register" className="btn-register" >cadastrar</Link>
          </div>
          <h3 className="response">{response}</h3>
        </>
      }
      {token === "allowed" &&
        <Logged name={name} />
      }
    </div>
  )
}

export default FormLogin;
