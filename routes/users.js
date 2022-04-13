import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  res.send(users);
});

export default router;
