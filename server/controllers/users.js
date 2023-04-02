const router = require('express').Router();
const bcrypt = require('bcrypt');
const prisma = require('../prisma/prisma');
const {
  isUserNameValid,
  isValidEmail,
  isValidPassword,
} = require('../utils/validation');

router.post('/', async (req, res) => {
  const { username, password, email } = req.body;

  if (
    !isUserNameValid(username) ||
    !isValidEmail(email) ||
    !isValidPassword(password)
  ) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = await prisma.user.create({
    data: { username, passwordHash, email },
  });
  delete newUser.passwordHash;
  return res.status(201).json(newUser);
});

module.exports = router;
