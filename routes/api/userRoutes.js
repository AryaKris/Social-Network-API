const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateSingleUser,
    deleteSingleUser,
    addNewFriend,
    removeNewFriend
} = require('../../controllers/userController');

// /api/users 
router.route('/')
    .get(getUsers) //Get All Users
    .post(createUser); //Create New User

// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateSingleUser)
    .delete(deleteSingleUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
.post(addNewFriend)
.delete(removeNewFriend);

module.exports = router;
