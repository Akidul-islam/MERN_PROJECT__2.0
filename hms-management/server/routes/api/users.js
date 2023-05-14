const router = require('express').Router();
const users = require('../../controller/users');
router
  .route('/:id')
  .get(users.getUser)
  .patch(users.patchUsersUpdate)
  .delete(users.usersDelete);

router.route('/').post(users.usersCreate);
module.exports = router;
