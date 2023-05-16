import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const FormRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    password: '',
    confirmpassword: '',
  });
  const [response, setResponse] = useState("");

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmpassword) {
      setResponse("As senhas precisam ser iguais");
      setTimeout(() => {
        setResponse("");
      }, 2500);
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    navigate('/');
  }

  return (
    <div>
      <div className="form_box">
        <form onSubmit={handleSubmit}>
          <h2>Registrar</h2>
          <input type="text" name="name" placeholder="Digite o seu nome" value={form.name} onChange={(e) => handleChangeForm(e)} className="input" required />
          <input type="password" name="password" placeholder="Digite a sua senha" value={form.password} onChange={(e) => handleChangeForm(e)} className="input" required />
          <input type="password" name="confirmpassword" placeholder="Confirme a sua senha" value={form.confirmPassword} onChange={(e) => handleChangeForm(e)} className="input" required />
          <input type="submit" value="Cadastrar" className="btn-register" />
        </form>
        <u>ou</u>
        <Link to="/" className="btn-login" >entrar</Link>
      </div>
      <h3 className="response">{response}</h3>
    </div>
  )
}

export default FormRegister
