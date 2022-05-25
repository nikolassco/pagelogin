import "./FormLogin.css";

import { useState } from 'react';

const FormLogin = ({ user, access }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(access[0].status);

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name === user[0].name && password === user[0].password) || (name === user[1].name && password === user[1].password)) {
      setToken(access[1].status);
    } else {
      alert("Usuário ou senha Inválidos");
    }
  }

  return (
    <div>
      {token === "denied" &&
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome:</span>
              <input type="text" name="name" placeholder="Digite o seu nome" value={name} onChange={handleName} />
            </label>
            <label>
              <span>Senha:</span>
              <input type="password" name="password" placeholder="Digite a sua senha" value={password} onChange={handlePassword} />
            </label>
            <label>
              <input type="submit" value="Entrar" className="btn" />
            </label>
          </form>
          <p>Nome: {user[1].name}</p>
          <p>Senha: {user[1].password}</p>
        </div>
      }
      {token === "allowed" &&
        <div>
          <h1>Acessou o Sistema</h1>
          <p>Bem Vindo usuário {name}</p>
        </div>
      }
    </div>
  )
}

export default FormLogin;
