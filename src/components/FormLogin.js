import "./FormLogin.css";

import { useState } from 'react';

const user = [
  { id: 1, name: "Nikolas", password: "senhateste" },
  { id: 2, name: "Teste", password: "senha" },
];

const access = [
  { id: 1, status: "denied" },
  { id: 2, status: "allowed" },
];

const FormLogin = () => {
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
    console.log("Enviou o form");
    console.log(name, password);
    if ((name === user[0].name && password === user[0].password) || (name === user[1].name && password === user[1].password)) {
      console.log("Certo");
      setToken(access[1].status);
    } else {
      console.log("errou");
      alert("Usuário ou senha Inválidos");
    }
  }

  return (
    <div>
      {token === "denied" &&
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
      }
      {token === "allowed" &&
        <h1>Acessou o Sistema</h1>
      }
    </div>
  )
}

export default FormLogin;
