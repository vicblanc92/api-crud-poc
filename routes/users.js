import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(
    `User with the name ${user.firstName}, and surname ${user.lastName}, whose email is ${user.email} and whose birthdate is ${user.birthdate} added to the database`
  );
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

export default router;
