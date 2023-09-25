const { Router } = require('express');
const multer = require('multer');
const uploadAvatarConfig = require('../configs/uploadAvatar')

const UsersController = require('../controllers/UsersController');
const UserAvatarController = require('../controllers/UserAvatarController');

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated")
const usersRoutes = Router();
const upload = multer(uploadAvatarConfig.MULTER);

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)

usersRoutes.patch('/avatar', ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;