const express = require('express');
const user = require('./models/user');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/users', async (_req, res) => {
  const users = await user.getAll();
  
  return res.status(200).json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  const foundUser = user.findById(id);

  if (!foundUser) return res.status(404).json({ message: 'usuário não encontrado' });

  return res.status(200).json(foundUser);
});

app.post('/users', async (req, res) => {
  const newUser = req.body;

  if (!user.isPasswordValid(newUser.password)) {
    return res.status(400).json({ message: 'O campo "password" deve ter pelo menos 6 caracteres' });
  }

  await user.create(newUser);

  res.status(201).json({ message: 'Usuário inserido com sucesso! '});
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
