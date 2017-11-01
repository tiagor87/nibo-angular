import * as express from 'express';

export const users = [
  {
    id: 1,
    email: 'tiago@nibo.com.br',
    password: '123456',
    token: 'AccessToken'
  }
];

export const userRouter = express.Router();

userRouter.route('/:id').get((request, response) => {
  const filteredUsers = users.filter(u => u.id === request.params['id']);
  if (filteredUsers.length) {
    return response.status(200).json(filteredUsers[0]);
  }
  response.status(404).json({
    message: 'User not found.'
  });
});
