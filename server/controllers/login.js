const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const prisma = require('../prisma/prisma');
require('dotenv').config();

router.post('/', async (request, response) => {
  const { username, password } = request.body;
  const user = await prisma.user.findUnique({ where: { username } });

  const verified = user && (await bcrypt.compare(password, user.passwordHash));

  if (!verified) {
    return response.status(401).json({
      error: 'invalid username or password',
    });
  }

  const userForToken = {
    username: user.username,
    id: user.id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60,
  });

  return response.status(200).send({ token, username: user.username });
});

module.exports = router;
