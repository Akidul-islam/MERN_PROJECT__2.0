const router = require('express').Router()
const users = require('../../controller/users')

// this is a only Admin task
// user can deleted ,update and get single users by user email 
router.route('/:id').get(users.getUser).patch(users.patchUsersUpdate).delete(users.usersDelete)

router.route('/').get(users.getUsers).post(users.usersCreate)
module.exports = router;

exports.restrictTO =
    // eslint-disable-next-line prettier/prettier
    (...role) => (req, res, next) => {
            if (!role.includes(req.user.role)) {
                return next(new AppError('Your have no permission to perform this action', 403));
            }
            next();
        };