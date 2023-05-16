import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    password: ''
  });
  const [response, setResponse] = useState("");

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (form.name !== user.name || form.password !== user.password) {
      setResponse("Usuario/senha inválido");
      setTimeout(() => {
        setResponse("");
      }, 2500);
      return;
    }

    navigate('/home');
  }

  return (
    <div>
      <div className="form_box">
        <form onSubmit={handleSubmit} >
          <h2>Entrar</h2>
          <input type="text" name="name" placeholder="Digite o seu nome" value={form.name} onChange={(e) => handleChangeForm(e)} className="input" required />
          <input type="password" name="password" placeholder="Digite a sua senha" value={form.password} onChange={(e) => handleChangeForm(e)} className="input" required />
          <input type="submit" value="Entrar" className="btn-login" />
        </form>
        <u>ou</u>
        <Link to="/register" className="btn-register" >cadastrar</Link>
      </div>
      <h3 className="response">{response}</h3>
    </div>
  )
}

export default FormLogin;
