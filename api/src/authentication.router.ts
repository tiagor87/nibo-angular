import * as express from 'express';

const users = [
  {
    email: 'tiago@nibo.com.br',
    password: '123456',
    token: 'AccessToken'
  }
];

export const authRouter = express.Router();

authRouter.route('/').post((request, response) => {
  const user = request.body;
  const validUsers = users.filter(
    u => u.email === user.email && u.password === user.password
  );
  if (validUsers.length) {
    return response.status(200).json({ token: validUsers[0].token });
  }
  response.status(401).json({
    message: 'User or password invalid.'
  });
});

authRouter.route('/:token').get((request, response) => {
  if (users[0].token === request.params['token']) {
    return response.status(200).json({
      isValid: true
    });
  }
  response.status(401).json({
    message: 'Token invalid.'
  });
});
