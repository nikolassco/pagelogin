import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const FormRegister = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setResponse("As senhas precisam ser iguais");
      setTimeout(() => {
        setResponse("");
      }, 2500);
      return;
    }
  }

  return (
    <>
      <div className="form_box">
        <form onSubmit={handleSubmit}>
          <h2>Registrar</h2>
          <input type="text" name="name" placeholder="Digite o seu nome" value={name} onChange={(e) => setName(e.target.value)} className="input" required />
          <input type="password" name="password" placeholder="Digite a sua senha" value={password} onChange={(e) => setPassword(e.target.value)} className="input" required />
          <input type="password" name="password" placeholder="Confirme a sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input" required />
          <input type="submit" value="Cadastrar" className="btn-register" />
        </form>
        <p>ou</p>
        <Link to="/" className="btn-login" >entrar</Link>
      </div>
      <h3 className="response">{response}</h3>
    </>
  )
}

export default FormRegister
