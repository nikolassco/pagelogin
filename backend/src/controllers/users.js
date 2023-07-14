require('dotenv').config();
const knex = require("../connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: "Campos obrigatórios." });
  }

  try {
    const ifExistUser = await knex('users').where({ name });
    if (ifExistUser.length > 0) {
      return res.status(400).json({ message: 'Usuário já cadastrado.' })
    }

    const passwordCript = await bcrypt.hash(password, 10);
    const newUser = await knex('users')
      .insert({
        name,
        password: passwordCript
      })
      .returning('*');

    return res.status(201).json({ message: newUser });
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor." });
  }

}

const login = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ message: "Campos obrigatórios." });
  }
  try {
    const user = await knex('users').where({ name });
    if (user.length < 1) {
      return res.status(400).json({ message: 'Nome ou senha inválido.' });
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Nome ou senha inválido.' });
    }

    const token = jwt.sign({ id: user[0].id }, process.env.JWTKEY, { expiresIn: '8h' });

    const { password: _, ...userLogged } = user[0];

    return res.json({ user: userLogged, token });
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}


module.exports = { registerUser, login }
