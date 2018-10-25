const routerUser = require('express').Router()
import usersController from '../controllers/users'

routerUser.route('/sigup').post(usersController.sigUp)
routerUser.route('/sigin').post(usersController.sigIn)
routerUser.route('/secret').get(usersController.scret)

module.exports = routerUser
