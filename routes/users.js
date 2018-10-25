import express from 'express';
import bodyParser from 'body-parser';
import usersController from './controllers/users';

const routerUser = express.Router()

routerUser.use(bodyParser.urlencoded({ extended: false }));
routerUser.use(bodyParser.json());

routerUser.post('/sigin', usersController.sigIn)
routerUser.post('/sigup', usersController.sigUp)
routerUser.post('/secret', usersController.scret)

module.exports = routerUser
