const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Cria uma string com o nome completo do autor
const getUser = (userData) => {
  const { id, firstName, lastName, email, password } = userData;

  return {
    id,
    firstName,
    lastName,
    email,
    password,
  };
};

// Busca todos os usuários do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
      .then((users) =>
        users.map(({ id, firstName, lastName, email, password }) =>
          getUser({
            id,
            firstName,          
            lastName,
            email,
            password,
          })
        )
      );
}

const isPasswordValid = (password) => {
  if (!password || typeof password !== 'string' || password.lenght < 6) return false;
  return true;
};

const create = async ({ firstName, lastName, email, password }) =>
  connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then(result => getUser({ id: result.insertedId, firstName, lastName, email, password }));

const findById = async (id) => {
  const user = await connection()
  .then((db) => db.collection('users').findOne(new ObjectId(id)))
  .then(({ insertedId, firstName, lastName, email, password }) => getUser({ id: insertedId, firstName, lastName, email, password }));

  if (user === undefined) return null;
  return user;
}

module.exports = {
  getAll,
  isPasswordValid,
  create,
  findById,
};