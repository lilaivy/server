const Router = require('express').Router;
const router = Router();
const User = require('../models/user');


router.get('/', (req, res, next) => {
  User.find()
    .then(users => res.send(users))
    .catch(next);
})

  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findById()
      .then(user => {
        if (!user) return res.status(404).send(`${id} is not a user`);
        else res.send(user);
      })
      .catch(next);
  })

  .post('/', (req, res, next) => {
    new User(req.body).save()
      .then(user => res.send(user))
      .catch(next);
  })

  .post('/auth/signin', (req, res, next) => {
    console.log(req.body);
  });

module.exports = router;



