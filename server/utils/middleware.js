const morgan = require('morgan');

morgan.token('body', (req, res) =>
  req.body && !req.originalUrl.includes('/api/users')
    ? JSON.stringify(req.body)
    : ''
);

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

module.exports = { morgan, unknownEndpoint };
