import express from 'express';
import { GetAllUsers, Login, Profile, Register } from '../Controller/User.Controller.js';
import {Authorization} from '../Middlewares/IsAuthentication.js'
const router  = express.Router();

// Register User 
router.post('/register', Register);
router.post('/login', Login)

// get all users
router.get('/all', GetAllUsers)
router.get('/profile',Authorization, Profile)


export default router